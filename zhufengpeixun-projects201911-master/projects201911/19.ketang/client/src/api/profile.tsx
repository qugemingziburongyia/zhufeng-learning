import request from './index';
import { RegisterPayload, LoginPayload } from '@/typings/profile';
export function validate() {
    return request.get(`/user/validate`);
}


//T其实就代表真正的返回的数据
export function register<T>(values: RegisterPayload) {
    return request.post<T, T>(`/user/register`, values);
}
export function login<T>(values: LoginPayload) {
    return request.post<T, T>(`/user/login`, values);
}