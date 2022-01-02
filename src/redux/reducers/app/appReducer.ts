import { TAppState } from './types';
import { APP_ACTIONS } from 'redux/actions/app/appActions';
import { TAction } from 'redux/types';

const initialState: TAppState = {
    isLoading: false,
};

export const appReducer = (state: TAppState = initialState, { type }: TAction): TAppState => {
    switch (type) {
        case APP_ACTIONS.SHOW_LOADER:
            return { ...state, isLoading: true };
        case APP_ACTIONS.HIDE_LOADER:
            return { ...state, isLoading: false };
        default:
            return { ...state };
    }
};
