import {SNAKE_REGEX} from "@constants";
export const ActionType = {
  GET_MOVIES: `GET_MOVIES`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_GENRES: `GET_GENRES`,
  REQUIRE_AUTH: `REQUIRE_AUTH`,
  LOGIN: `LOGIN`,
  AUTH: `AUTH`,
  UPDATE_COMMENTS: `UPDATE_COMMENTS`,
  LOAD_MORE: `LOAD_MORE`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  UPDATE_MOVIE: `UPDATE_MOVIE`,
  ERROR: `ERROR`,
  ERROR_OFF: `ERROR_OFF`,
};

const getGenresList = (films) => [`All genres`, ...Array.from(new Set(films.map(({genre}) => genre)))];
const snakeToCamel = (snakeString) => snakeString.replace(SNAKE_REGEX, (g) => g[1].toUpperCase());

const convertData = (origin) => {
  const newObject = {};
  Object.keys(origin).forEach((prop) =>{
    newObject[snakeToCamel(prop)] = origin[prop];
  });
  return newObject;
};

const convertArrayData = (items) => items.map((item) => convertData(item));

const actionCreator = {
  changeGenre: (genre) => ({type: ActionType.CHANGE_GENRE, payload: genre}),
  getMovies: (films) => {
    const res = {type: ActionType.GET_MOVIES, payload: convertArrayData(films)};
    return res;
  },
  getGenres: (films) => ({type: ActionType.GET_GENRES, payload: getGenresList(films)}),
  requireAuthorization: (isRequired) => ({type: ActionType.REQUIRE_AUTH, payload: isRequired}),
  login: (email, password) => ({type: ActionType.LOGIN, payload: {email, password}}),
  auth: (user) => ({type: ActionType.AUTH, payload: convertData(user)}),
  updateComments: (comments) => ({type: ActionType.UPDATE_COMMENTS, payload: comments}),
  loadMore: (limit) => ({type: ActionType.LOAD_MORE, payload: limit}),
  loadPromo: (film) => ({type: ActionType.LOAD_PROMO, payload: convertData(film)}),
  loadFavorites: (favorites) => ({type: ActionType.LOAD_FAVORITES, payload: convertArrayData(favorites)}),
  updateMovie: (movie) => ({type: ActionType.UPDATE_MOVIE, payload: convertData(movie)}),
  pushError: (errorText) => ({type: ActionType.ERROR, payload: errorText}),
  pushErrorOff: (errorText) => ({type: ActionType.ERROR_OFF, payload: errorText})
};

export default actionCreator;
