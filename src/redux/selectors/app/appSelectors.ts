import { TStore } from 'redux/reducers/types';

export const selectIsLoading = (store: TStore): boolean => store.app.isLoading;
