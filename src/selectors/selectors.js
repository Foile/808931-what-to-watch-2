import {createSelector} from 'reselect';
import moment from "moment";

const getFilmList = (state) => state.data.allFilms || [];
const getActiveGenre = (state) => state.user.genre || `All genres`;
const getLimitFilms = (state) => state.user.limit || 0;
const getComments = (state) => state.data.comments || [];
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

export const getSortedComments = createSelector(
    [getComments],
    (comments) => {
      comments.sort((a, b) => moment(b.date) - moment(a.date));
      return comments;
    }
);


export default getLimitFilteredFilms;
