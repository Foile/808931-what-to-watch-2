import {createSelector} from 'reselect';

const getFilmList = (state) => state.allMovies;
const getActiveGenre = (state) => state.genre;

const getVisibleMovies = createSelector(
    [getFilmList, getActiveGenre],
    (movies, genre) => genre !== `All genres` ?
      movies.filter(({genre: movieGenre})=> movieGenre === genre) :
      movies
);


export default getVisibleMovies;
