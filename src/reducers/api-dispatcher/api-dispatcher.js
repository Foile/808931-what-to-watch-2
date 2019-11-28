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
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(true));
      });
  },
  login: (email, password) => (dispatch) => {
    return api.post(`/login`, {email, password})
      .then((response) => {
        console.log(response);
        dispatch(ActionCreator.requireAuthorization(false));
      });
  },
};

export default apiDispatcher;
