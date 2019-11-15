const ActionCreator = {
  changeGenre: (genre) => {
    return {type: `CHANGE_GENRE`, payload: genre};
  },
  getMovies: () => ({type: `GET_MOVIES`})
};

const filterMovies = (movies, genre) => genre !== `All genres` ?
  movies.filter(({genre: movieGenre})=> movieGenre === genre) :
  movies;

const reducer = (state = {}, action) => {
  switch (action.type) {
    case `CHANGE_GENRE`: return Object.assign({}, state, {genre: action.payload});
    case `GET_MOVIES`: return Object.assign({}, state, {films: filterMovies(state.allFilms, state.genre)});
  }
  return state;
};

export {
  reducer,
  ActionCreator
};
