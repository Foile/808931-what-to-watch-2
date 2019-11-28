import {ActionType} from '../../action-creator/action-creator';

const data = (state = {}, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES: return Object.assign({}, state, {allFilms: action.payload});
    case ActionType.GET_GENRES: return Object.assign({}, state, {genres: action.payload});
  }
  return state;
};

export default data;
