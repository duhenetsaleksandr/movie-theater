import { TMovieState } from './types';

const initialState: TMovieState = {
    movie: null,
};

export const movieReducer = (state: TMovieState = initialState): TMovieState => {
    return state;
};
