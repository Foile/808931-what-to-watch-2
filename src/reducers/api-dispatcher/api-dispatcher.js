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
  loadPromoFilm: () => (dispatch) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.getPromo(response.data));
      });
  },
  loadFilmComments: (id) => (dispatch) => {
    return api.get(`/comments/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.updateComments(id, data));
    });
  },
  addComment: (filmId, rating, comment) => (dispatch) => {
    return api.post(`/comments/${filmId}`, {rating, comment})
    .then(({data}) => {
      dispatch(ActionCreator.updateComments(filmId, data));
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
