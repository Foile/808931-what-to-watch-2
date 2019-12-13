import {ActionType} from '../../action-creator/action-creator';

const initialState = {
  allFilms:[], 
  comments: [],
}

const data = (state = initialState, action) => {
  console.log(state, action)
  switch (action.type) {
    case ActionType.GET_MOVIES: return Object.assign({}, state, {allFilms: action.payload});
    case ActionType.GET_GENRES: return Object.assign({}, state, {genres: action.payload});
    case ActionType.UPDATE_COMMENTS: return Object.assign({}, state, {comments: action.payload});
    case ActionType.LOAD_PROMO: return Object.assign({}, state, {promo: action.payload});
  }
  return state;
};

export default data;
