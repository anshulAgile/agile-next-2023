import { CK_USER } from "@/constants";
import { AppAPIInstance } from "@/service/api";
import { getCookie } from "@/service/cookie";
import { authFail, authSuccess } from "@/service/redux/slices/AuthSlice";
import { Store } from "redux";
import { redirect } from 'next/navigation'
import { ROUTES } from "@/constants/routes";

// Fun used for setting up the common header for axios through out the app and rehydrate the redux store
export const setupAxios = (store: Store) => {
    console.log('setup axios called');
    try {
        console.log('getCookie(CK_USER): ', getCookie(CK_USER));
        if (getCookie(CK_USER)) {
            const userData = JSON.parse(getCookie(CK_USER) || '');

            // It's used to rehydrate redux auth data when page is refreshed
            if (userData?.authToken) {
                store.dispatch(authSuccess(userData));
            } else {
                store.dispatch(authFail({}));
            }
        }

        AppAPIInstance.interceptors.response.use(null, (err) => {
            if (err.response) {
                if (err.response.status === 401 || err.response.status === 403) {
                    store.dispatch(authFail({}));
                    window.location.replace(ROUTES.signin)
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
    } catch (error) {
        console.log('error: ', error);

    }
};


export const toCheckAuthPage = (path: string) => (!path.includes('/auth'))
