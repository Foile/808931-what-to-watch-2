const initialState = {genre: `All genres`};
const ActionCreator = {
  changeGenre: (genre) => ({type: `CHANGE_GENRE`, payload: genre}),
  getMovies: () => ({type: `GET_MOVIES`, payload: ``})
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_GENRE`: return Object.assign({}, state, {genre: action.payload});
    case `GET_MOVIES`: return Object.assign({}, state, {genre: state.step + action.payload});
  }

  return state;
};

export {
  reducer,
  ActionCreator
};
