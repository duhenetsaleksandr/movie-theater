import { combineReducers } from 'redux';
import { authReducer } from './auth/authReducer';
import { movieReducer } from './movie/movieReducer';
import { moviesReducer } from './movies/moviesReducer';
import { appReducer } from './app/appReducer';

export const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    movie: movieReducer,
    movies: moviesReducer,
});
