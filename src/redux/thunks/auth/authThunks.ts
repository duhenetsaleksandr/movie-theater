import * as clientAPI from 'clientAPI/clientAPI';
import { fetchLogIn } from 'redux/actions/auth/authActions';
import { TSignInBody } from 'redux/actions/auth/types';
import { TAuthThunk } from './types';

export const fetchSignIn = (payload: TSignInBody): TAuthThunk => {
    return async (dispatch) => {
        try {
            dispatch(fetchLogIn.request());
            const signInData = await clientAPI.postSignIn(payload);
            dispatch(fetchLogIn.success(signInData))
        } catch {
            dispatch(fetchLogIn.failure());
        } finally {
            dispatch(fetchLogIn.cancel());
        }
    };
};
