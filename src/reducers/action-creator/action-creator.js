
export const ActionType = {
  GET_MOVIES: `GET_MOVIES`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_GENRES: `GET_GENRES`,
  REQUIRE_AUTH: `REQUIRE_AUTH`,
  LOGIN: `LOGIN`,
  AUTH: `AUTH`,
  UPDATE_COMMENTS: `UPDATE_COMMENTS`,
  LOAD_MORE: `LOAD_MORE`

};

const getGenresList = (films) => [`All genres`, ...Array.from(new Set(films.map(({genre}) => genre)))];
const snakeToCamel = (snakeString) => snakeString.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace(`-`, ``).replace(`_`, ``));

const convertData = (origin) => {
  const newObject = {};
  Object.keys(origin).forEach((prop) =>{
    newObject[snakeToCamel(prop)] = origin[prop];
  });
  return newObject;
};

const convertMoviesData = (movies) => movies.map((movie) => convertData(movie));

const ActionCreator = {
  changeGenre: (genre) => ({type: ActionType.CHANGE_GENRE, payload: genre}),
  getMovies: (films) => {
    const res = {type: ActionType.GET_MOVIES, payload: convertMoviesData(films)};
    return res;
  },
  getGenres: (films) => ({type: ActionType.GET_GENRES, payload: getGenresList(films)}),
  requireAuthorization: (isRequired) => ({type: ActionType.REQUIRE_AUTH, payload: isRequired}),
  login: (email, password) => ({type: ActionType.LOGIN, payload: {email, password}}),
  auth: (user) => ({type: ActionType.AUTH, payload: convertData(user)}),
  updateComments: (filmId, comments) => ({type: ActionType.UPDATE_COMMENTS, payload: {filmId, comments: convertData(comments)}}),
  loadMore: (limit) => ({type: ActionType.LOAD_MORE, payload: limit})
};

export default ActionCreator;
