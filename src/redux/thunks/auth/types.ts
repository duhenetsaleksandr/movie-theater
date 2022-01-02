import { ThunkAction } from 'redux-thunk';
import { TStore } from 'redux/reducers/types';
import { AUTH_ACTIONS } from 'redux/actions/auth/authActions';
import { TAction } from 'redux/types';
import { TSignInData } from 'redux/actions/auth/types';
import { APP_ACTIONS } from 'redux/actions/app/appActions';

export type TAuthThunk<R = void> = ThunkAction<R, TStore, unknown, TAction<AUTH_ACTIONS | APP_ACTIONS, TSignInData>>;
