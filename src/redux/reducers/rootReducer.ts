import { combineReducers } from 'redux';
import { authReducer } from './auth/authReducer';
import { movieReducer } from './movie/movieReducer';
import { moviesReducer } from './movies/moviesReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    movie: movieReducer,
    movies: moviesReducer,
});
