import { TStore } from 'redux/reducers/types';

export const selectToken = (store: TStore): string | null => store.auth.token;
