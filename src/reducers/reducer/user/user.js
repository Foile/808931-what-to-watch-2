import {ActionType} from '@reducers/action-creator/action-creator';
import Constants from "@src/const";

const initialState = {
  isAuthorizationRequired: false,
  limit: Constants.FILMS_LIMIT_DEF,
  genre: Constants.DEFAULT_GENRE
};

const createUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE: return Object.assign({}, state, {genre: action.payload});
    case ActionType.REQUIRE_AUTH: return Object.assign({}, state, {isAuthorizationRequired: action.payload});
    case ActionType.LOGIN: return Object.assign({}, state, {login: action.payload});
    case ActionType.AUTH: return Object.assign({}, state, {auth: action.payload});
    case ActionType.LOAD_MORE: return Object.assign({}, state, {limit: state.limit + action.payload});
    case ActionType.LOAD_FAVORITES: return Object.assign({}, state, {favoriteMovies: action.payload});
    case ActionType.ERROR: return Object.assign({}, state, {error: action.payload});
    case ActionType.ERROR_OFF: return Object.assign({}, state, {error: ``});
  }
  return state;
};

export default createUserReducer;
