import ActionCreator from '../action-creator/action-creator';
import {api} from "../../api";
import {startLoading, stopLoading} from "react-redux-hoc-loader";
import history from "../../history";

const apiDispatcher = {
  loadFilms: () => (dispatch) => {
    return api.get(`/films`)
      .then(({data}) => {
        dispatch(ActionCreator.getMovies(data));
        dispatch(ActionCreator.getGenres(data));
      });
  },
  loadFavoriteFilms: () => (dispatch) => {
    return api.get(`/favorite`)
      .then(({data}) => {
        dispatch(ActionCreator.loadFavorites(data));
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
    return api.get(`/comments/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.updateComments(data));
    });
  },
  addComment: (filmId, rating, comment) => (dispatch) => {
    return api.post(`/comments/${filmId}`, {rating, comment})
    .then((response) => {
      dispatch(ActionCreator.updateComments(response.data));
      history.push(`/films/${filmId}/reviews`);
    })
    .catch((err) => {
      dispatch(ActionCreator.pushError(err.response));
    });
  },
  toggleFavorite: (id, status) => (dispatch) => {
    return api.post(`/favorite/${id}/${status}`)
    .then(({data}) => {
      if (data) {
        dispatch(ActionCreator.updateMovie(data));
      }
    });
  },
  checkAuth: () => (dispatch) => {
    return api.get(`/login`)
      .then(({data}) => {
        dispatch(ActionCreator.requireAuthorization(!data));
        if (data) {
          dispatch(ActionCreator.auth(data));
        }
      })
    .catch((err) => {
      dispatch(ActionCreator.pushError(err.response));
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
