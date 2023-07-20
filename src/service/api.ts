// import { API_BASE } from '@/constants';
import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";

const API_BASE = 'https://node-product-distribution-backend.agiletechnologies.in'

const AppAPIInstance: AxiosInstance = axios.create({
    baseURL: API_BASE,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

const setToken = (token: string) => {
    AppAPIInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const removeToken = (token: string) => {
    delete AppAPIInstance.defaults.headers.common['Authorization'];
};

AppAPIInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        console.log("Here...", response);
        return response.data;
    },
    (error: AxiosError) => {
        if (error.response) {
            if (error.response.data) {
                console.error("API Error:", error.response.data);
                // toast.dismiss();
                // const errorResponse = error.response.data as IErrorResponse;
                // toast.error(errorResponse.error);
            }
            if (error.response.status === 401 || error.response.status === 403) {
                // const { dispatch } = store;
                // dispatch({ type: "user/reset" });
            }
        }
        throw error;
    }
);

export {
    AppAPIInstance,
    setToken,
    removeToken
}