import ActionCreator from '../action-creator/action-creator';
import {api} from "../../api";

const apiDispatcher = {
  loadFilms: () => (dispatch) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.getMovies(response.data));
        dispatch(ActionCreator.getGenres(response.data));
      });
  },
  checkAuth: () => (dispatch) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(response.data));
      });
  }
};

export default apiDispatcher;
