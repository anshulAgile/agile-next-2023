import { CK_USER } from "@/constants";
import { AppAPIInstance } from "@/service/api";
import { deleteCookie, setCookie } from "@/service/cookie";
import { createSlice } from "@reduxjs/toolkit";

export interface IAuthSlice {
    isLoading: boolean;
    isLoggedIn: boolean;
    userData?: any;
}

const initialState: IAuthSlice = {
    isLoading: false,
    isLoggedIn: false,
    userData: {}
};

// Reducer
const loginSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {
        authSuccess: (state, action) => {
            AppAPIInstance.defaults.headers.common['Authorization'] =
                "Bearer" + " " + action.payload.authToken;

            setCookie(CK_USER, JSON.stringify(action.payload))

            state.isLoggedIn = true
            state.userData = action.payload
        },
        authFail: (state, action) => {
            delete AppAPIInstance.defaults.headers.common['Authorization'];

            deleteCookie(CK_USER)

            state.isLoggedIn = false
            state.userData = {}
        },
        loaderChange: (state, payload) => {
            state.isLoading = payload.payload;
        },
    },
});

export const { loaderChange, authSuccess, authFail } = loginSlice.actions;
export default loginSlice.reducer;
