import { TAuthState } from './auth/types';
import { TMovieState } from './movie/types';
import { TMoviesState } from './movies/types';
import { TAppState } from './app/types';

export type TStore = {
    app: TAppState,
    auth: TAuthState,
    movie: TMovieState,
    movies: TMoviesState,
};