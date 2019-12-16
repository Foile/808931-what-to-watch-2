import {ActionType} from '@reducers/action-creator/action-creator';

const initialState = {
  allFilms: [],
};

const replaceFilmData = (state, movie) => {
  const {id: movieId} = movie;
  state.allFilms = state.allFilms.map((film) => movieId === film.id ? movie : film);

  if ((state.promo || {}).id === movieId) {
    state.promo = movie;
  }
  return state;
};

const createDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES: return Object.assign({}, state, {allFilms: action.payload});
    case ActionType.GET_GENRES: return Object.assign({}, state, {genres: action.payload});
    case ActionType.UPDATE_COMMENTS: return Object.assign({}, state, {comments: action.payload});
    case ActionType.LOAD_PROMO: return Object.assign({}, state, {promo: action.payload});
    case ActionType.UPDATE_MOVIE: return Object.assign({}, state, replaceFilmData(state, action.payload));
  }
  return state;
};

export default createDataReducer;
