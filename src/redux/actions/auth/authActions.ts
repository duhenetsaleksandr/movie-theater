import { createAction, createAsyncAction } from 'typesafe-actions';
import { TSignInData } from './types';
import { APP_ACTIONS } from 'redux/actions/app/appActions';

export enum AUTH_ACTIONS {
    FETCH_SIGN_IN_SUCCESS = '@AUTH/SIGN_IN/FETCH_SUCCESS',
    FETCH_SIGN_IN_FAIL = '@AUTH/SIGN_IN/FETCH_FAIL',
    LOG_OUT = '@AUTH/LOG_OUT',
}

export const logOut = createAction(AUTH_ACTIONS.LOG_OUT)();

export const fetchLogIn = createAsyncAction(
    APP_ACTIONS.SHOW_LOADER,
    AUTH_ACTIONS.FETCH_SIGN_IN_SUCCESS,
    AUTH_ACTIONS.FETCH_SIGN_IN_FAIL,
    APP_ACTIONS.HIDE_LOADER
)<undefined, TSignInData, undefined, undefined>();
