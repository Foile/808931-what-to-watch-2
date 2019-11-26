import ActionCreator from '../action-creator/action-creator';

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

export default apiDispatcher;
