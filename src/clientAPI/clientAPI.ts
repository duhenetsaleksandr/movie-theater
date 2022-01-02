import axios from 'axios';
import { API_URL } from 'constants/api';
import { TSignInData, TSignInRes, TSignInBody } from 'redux/actions/auth/types';

export const postSignIn = async (payload: TSignInBody): Promise<TSignInData> => {
    const response = await axios.post<TSignInRes>(API_URL.SIGN_IN, payload);
    const id = response.data.userId;
    const token = response.headers['access-token'];
    if (!id || !token) throw new Error();
    return { id, token };
};
