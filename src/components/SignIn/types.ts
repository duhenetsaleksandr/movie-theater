import { TSignInBody } from 'redux/actions/auth/types';
import { TActionAuth, TAuthState } from 'redux/reducers/auth/types';
import { ThunkDispatch } from 'redux-thunk';
import { TStore } from 'redux/reducers/types';

export type TSignInProps = {
    fetchSignIn: (payload: TSignInBody) => void,
    auth: TAuthState,
};

export type TThunkDispatchSignIn = ThunkDispatch<TStore, unknown, TActionAuth>;
