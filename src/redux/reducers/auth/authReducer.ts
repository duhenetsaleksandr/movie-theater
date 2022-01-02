import { TActionAuth, TAuthState } from './types';
import { AUTH_ACTIONS } from 'redux/actions/auth/authActions';

const initialState: TAuthState = {
    id: null,
    token: null,
};

export const authReducer = (state: TAuthState = initialState, { type, payload }: TActionAuth) => {
    switch (type) {
        case AUTH_ACTIONS.FETCH_SIGN_IN_SUCCESS:
            return { ...state, id: payload.id, token: payload.token };
        case AUTH_ACTIONS.LOG_OUT:
            return { ...state, id: null, token: null };
        default: return { ...state };
    }
};
