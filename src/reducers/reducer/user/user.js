import {ActionType} from '../../action-creator/action-creator';

const user = (state = {}, action) => {
  console.log(state, action);
  switch (action.type) {
    case ActionType.CHANGE_GENRE: return Object.assign({}, state, {genre: action.payload});
    case ActionType.REQUIRE_AUTH: return Object.assign({}, state, {requireAuthorization: action.payload});
    case ActionType.LOGIN: return Object.assign({}, state, {login: action.payload});
  }
  return state;
};

export default user;
