import { TAction } from 'redux/types';
import { AUTH_ACTIONS } from 'redux/actions/auth/authActions';
import { TSignInData } from 'redux/actions/auth/types';

export type TAuthState = {
    id: number | null,
    token: string | null,
    isLoading: boolean,
};

export type TActionAuth = Required<TAction<AUTH_ACTIONS, TSignInData>>;
