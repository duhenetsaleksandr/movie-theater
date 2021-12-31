import { TMoviesState } from './types';

const initialState: TMoviesState = {
    movies: null,
};

export const moviesReducer = (state: TMoviesState = initialState): TMoviesState => {
    return state;
};