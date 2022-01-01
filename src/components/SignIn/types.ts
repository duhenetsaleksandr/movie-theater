import { TSignInBody } from 'redux/actions/auth/types';
import { TActionAuth } from 'redux/reducers/auth/types';
import { ThunkDispatch } from 'redux-thunk';
import { TStore } from 'redux/reducers/types';

export type TSignInProps = {
    fetchSignIn: (payload: TSignInBody) => void,
    token: string | null,
    isLoading: boolean,
};

export type TThunkDispatchSignIn = ThunkDispatch<TStore, unknown, TActionAuth>;
