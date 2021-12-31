import { TAuthState } from './auth/types';
import { TMovieState } from './movie/types';
import { TMoviesState } from './movies/types';

export type TStore = {
    auth: TAuthState,
    movie: TMovieState,
    movies: TMoviesState,
};