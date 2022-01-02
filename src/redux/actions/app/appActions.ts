import { createAction } from 'typesafe-actions';

export enum APP_ACTIONS {
    SHOW_LOADER = '@APP/SHOW_LOADER',
    HIDE_LOADER = '@APP/HIDE_LOADER',
}

export const showLoader = createAction(APP_ACTIONS.SHOW_LOADER)();

export const hideLoader = createAction(APP_ACTIONS.HIDE_LOADER)();
