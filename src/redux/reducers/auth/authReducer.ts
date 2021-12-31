import { TActionAuth, TAuthState } from './types';
import { AUTH_ACTIONS } from 'redux/actions/auth/authActions';

const initialState: TAuthState = {
    id: null,
    token: null,
    isLoading: false,
};

export const authReducer = (state: TAuthState = initialState, { type, payload }: TActionAuth) => {
    switch (type) {
        case AUTH_ACTIONS.FETCH_SIGN_IN_SUCCESS:
            return { ...state, id: payload.id, token: payload.token };
        case AUTH_ACTIONS.LOG_OUT:
            return { ...state, id: null, token: null };
        case AUTH_ACTIONS.SHOW_LOADER:
            return { ...state, isLoading: true };
        case AUTH_ACTIONS.HIDE_LOADER:
            return { ...state, isLoading: false };
        default: return { ...state };
    }
};
