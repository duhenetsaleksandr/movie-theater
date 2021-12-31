import { TMovie } from 'redux/reducers/movie/types';

export type TMovies = {
    totalCount: number,
    movies: Array<TMovie>,
    currentPage: number,
};

export type TMoviesState = {
    movies: TMovies | null,
};
