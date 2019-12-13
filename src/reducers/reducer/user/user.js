import {ActionType} from '../../action-creator/action-creator';
import Constant from "../../../const";

const initialState = {
  isAuthorizationRequired: false,
  limit: Constant.FILMS_LIMIT_RATE,
  genre: Constant.DEFAULT_GENRE
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE: return Object.assign({}, state, {genre: action.payload});
    case ActionType.REQUIRE_AUTH: return Object.assign({}, state, {isAuthorizationRequired: action.payload});
    case ActionType.LOGIN: return Object.assign({}, state, {login: action.payload});
    case ActionType.AUTH: return Object.assign({}, state, {auth: action.payload});
    case ActionType.LOAD_MORE: return Object.assign({}, state, {limit: state.limit + action.payload});
    case ActionType.LOAD_FAVORITES: return Object.assign({}, state, {favoriteMovies: action.payload});
  }
  return state;
};

export default user;
