import {createSelector} from 'reselect';

const getFilmList = (state) => state.data.allFilms ? state.data.allFilms : [];

const getActiveGenre = (state) => state.user.genre ? state.user.genre : `All genres`;

const getFilteredMovies = createSelector(
    getFilmList,
    getActiveGenre,
    (movies, genre) => genre !== `All genres` ?
      movies.filter(({genre: movieGenre}) => movieGenre === genre) :
      movies
);

export default getFilteredMovies;
