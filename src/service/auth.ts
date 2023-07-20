import { loginParam } from '@/types/auth';
import { AppAPIInstance } from './api';
import { LOGIN } from '@/constants/api';
import { store } from './redux/store';
import { authFail, authSuccess } from './redux/slices/AuthSlice';

export const login = async (data: loginParam): Promise<any> => {
    return AppAPIInstance.post(LOGIN, data)
        .then((res) => {
            store.dispatch(authSuccess(res?.data))
            return Promise.resolve(res);
        })
        .catch((err) => {
            store.dispatch(authFail({}))
            return Promise.reject(err);
        })
};
export const test = async (): Promise<any> => {
    return AppAPIInstance.post('/admin/dashboard/count')
};