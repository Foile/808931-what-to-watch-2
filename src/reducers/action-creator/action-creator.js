
export const ActionType = {
  GET_MOVIES: `GET_MOVIES`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_GENRES: `GET_GENRES`,
  REQUIRE_AUTH: `REQUIRE_AUTH`
};

const getGenresList = (films) => [`All genres`, ...Array.from(new Set(films.map(({genre}) => genre)))];
const snakeToCamel = (snakeString) => snakeString.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace(`-`, ``).replace(`_`, ``));

const convertMovieData = (movie) => {
  const newMovie = {};
  Object.keys(movie).forEach((prop) =>{
    newMovie[snakeToCamel(prop)] = movie[prop];
  });
  return newMovie;
};

const convertMoviesData = (movies) => movies.map((movie) => convertMovieData(movie));


const ActionCreator = {
  changeGenre: (genre) => ({type: ActionType.CHANGE_GENRE, payload: genre}),
  getMovies: (films) => {
    const res = {type: ActionType.GET_MOVIES, payload: convertMoviesData(films)};
    return res;
  },
  getGenres: (films) => ({type: ActionType.GET_GENRES, payload: getGenresList(films)}),
  requireAuthorization: () => ({type: ActionType.REQUIRE_AUTH, payload: true})
};
export default ActionCreator;
