import {ActionType} from '../../action-creator/action-creator';
const initialState = {
  isAuthorizationRequired: false,
  limit: 20
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE: return Object.assign({}, state, {genre: action.payload});
    case ActionType.REQUIRE_AUTH: return Object.assign({}, state, {isAuthorizationRequired: action.payload});
    case ActionType.LOGIN: return Object.assign({}, state, {login: action.payload});
    case ActionType.AUTH: return Object.assign({}, state, {auth: action.payload});
    case ActionType.LOAD_MORE: return Object.assign({}, state, {limit: state.limit + action.payload});
  }
  return state;
};

export default user;
