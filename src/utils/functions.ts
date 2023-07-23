import { CK_USER } from "@/constants";
import { AppAPIInstance, setToken } from "@/service/api";
import { getCookie } from "@/service/cookie";
import { authFail, authSuccess } from "@/service/redux/slices/AuthSlice";
import axios from "axios";
import { Store } from "redux";

// Fun used for setting up the common header for axios through out the app and rehydrate the redux store
export const setupAxios = async (store: Store) => {
    console.log('setup axios called');
    try {
        if (typeof document !== undefined && getCookie(CK_USER)) {
            const userData = JSON.parse(getCookie(CK_USER) || '');

            // It's used to rehydrate redux auth data when page is refreshed
            if (userData?.authToken) {
                store.dispatch(authSuccess(userData));
                setToken(userData?.authToken)
                axios.defaults.headers.common['Authorization'] =
                    "Bearer" + " " + userData?.authToken;
                console.log('AppAPIInstance: ', AppAPIInstance.defaults.headers);

            } else {
                delete AppAPIInstance.defaults.headers.common['Authorization'];
                store.dispatch(authFail({}));
            }

            AppAPIInstance.interceptors.response.use(null, (err) => {
                if (err.response) {
                    if (err.response.status === 401 || err.response.status === 403) {
                        // store.dispatch(authFail({}));
                        // window.location.replace(ROUTES.signin)
                        return Promise.reject(err);
                    } else return Promise.reject(err);
                } else if (err.request) {
                    return Promise.reject({
                        response: {
                            data: {
                                message: "Something went wrong, Please try again later!!!"
                            }
                        }
                    });
                }
            });
        }

    } catch (error) {
        console.log('error: ', error);
    }
};

export const toCheckAuthPage = (path: string) => (!path.includes('/auth'))
