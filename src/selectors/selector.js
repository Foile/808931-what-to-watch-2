import {createSelector} from 'reselect';

const getFilmList = (state) => state.allFilms ? state.allFilms : [];
const getActiveGenre = (state) => state.genre ? state.genre : `All genres`;

const getFilteredMovies = createSelector(
    getFilmList,
    getActiveGenre,
    (movies, genre) =>{
      return genre !== `All genres` ?
        movies.filter(({genre: movieGenre})=> movieGenre === genre) :
        movies;
    }
);

export default getFilteredMovies;
