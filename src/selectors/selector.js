import {createSelector} from 'reselect';


const getFilmList = (state) => state.data.allFilms ? state.data.allFilms : [];

const getActiveGenre = (state) => state.user.genre ? state.user.genre : `All genres`;

const getLimitFilms = (state) => state.user.limit ? state.user.limit : 0;

const getFilteredMovies = createSelector(
    getFilmList,
    getActiveGenre,
    (movies, genre) => genre !== `All genres` ?
      movies.filter(({genre: movieGenre}) => movieGenre === genre) :
      movies
);

const getLimitFilteredFilms = createSelector(
    getFilteredMovies,
    getLimitFilms,
    (movies, limit) => movies.slice(0, limit)
);

export default getLimitFilteredFilms;
