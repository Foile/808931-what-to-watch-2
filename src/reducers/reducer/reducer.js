import {ActionType} from '../action-creator/action-creator';
import ActionCreator from '../action-creator/action-creator';

const initialState = {films: [],
  allfilms: [],
  genres: [],
  genre: `All genres`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE: return Object.assign({}, state, {genre: action.payload});
    case ActionType.GET_MOVIES: return Object.assign({}, state, {allFilms: action.payload});
    case ActionType.GET_GENRES: return Object.assign({}, state, {genres: action.payload});
    case ActionType.REQUIRE_AUTH: return Object.assign({}, state, {requireAuthorization: action.payload});
  }
  return state;
};

const apiDispatcher = {
  loadFilms: () => (dispatch, _, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.getMovies(response.data));
        dispatch(ActionCreator.getGenres(response.data));
      });
  },
  checkAuth: () => (dispatch, _, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(response.data));
      });
  }
};


export {
  reducer,
  apiDispatcher
};
