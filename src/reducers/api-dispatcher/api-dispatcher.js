import ActionCreator from '../action-creator/action-creator';
import {api} from "../../api";
import {startLoading, stopLoading} from "react-redux-hoc-loader";
import history from "../../history";

const apiDispatcher = {
  loadFilms: () => (dispatch) => {
    dispatch(startLoading(`movies`));
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.getMovies(response.data));
        dispatch(ActionCreator.getGenres(response.data));
        dispatch(stopLoading(`movies`));
      });
  },
  loadPromoFilm: () => (dispatch) => {
    dispatch(startLoading(`promo`));
    return api.get(`/films/promo`)
      .then(({data}) => {
        dispatch(ActionCreator.loadPromo(data));
        dispatch(stopLoading(`promo`));
      });
  },
  loadFilmComments: (id) => (dispatch) => {
    dispatch(startLoading(`comments`));
    return api.get(`/comments/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.updateComments(id, data));
      dispatch(stopLoading(`comments`));
    });
  },
  addComment: (filmId, rating, comment) => (dispatch) => {
    return api.post(`/comments/${filmId}`, {rating, comment})
    .then(({data}) => {
      dispatch(ActionCreator.updateComments(filmId, data));
      dispatch(stopLoading(`comments`));
      history.push(`/films/${filmId}/reviews`);
    }
    );
  },
  checkAuth: () => (dispatch) => {
    return api.get(`/login`)
      .then(({data}) => {
        dispatch(ActionCreator.requireAuthorization(!data));
        if (data) {
          dispatch(ActionCreator.auth(data));
        }
      });
  },
  login: (email, password) => (dispatch) => {
    return api.post(`/login`, {email, password})
      .then(({data}) => {
        dispatch(ActionCreator.requireAuthorization(false));
        dispatch(ActionCreator.auth(data));
      });
  },
};

export default apiDispatcher;
