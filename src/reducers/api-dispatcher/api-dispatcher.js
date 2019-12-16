import ActionCreator from '@reducers/action-creator/action-creator';
import {api} from "@src/api";
import history from "@history";

const apiDispatcher = {
  loadFilms: () => (dispatch) => {
    return api.get(`/films`)
      .then(({data, response}) => {
        if (data) {
          dispatch(ActionCreator.getMovies(data));
          dispatch(ActionCreator.getGenres(data));
        }
        if (response && response.data.error) {
          dispatch(ActionCreator.pushError(response.data.error));
        }
      });
  },
  loadFavoriteFilms: () => (dispatch) => {
    return api.get(`/favorite`)
      .then(({data, response}) => {
        if (data) {
          dispatch(ActionCreator.loadFavorites(data));
        }
        if (response && response.data.error) {
          dispatch(ActionCreator.pushError(response.data.error));
        }
      });
  },
  loadPromoFilm: () => (dispatch) => {
    return api.get(`/films/promo`)
      .then(({data, response}) => {
        if (data) {
          dispatch(ActionCreator.loadPromo(data));
        }
        if (response && response.data.error) {
          dispatch(ActionCreator.pushError(response.data.error));
        }
      });
  },
  loadFilmComments: (id) => (dispatch) => {
    return api.get(`/comments/${id}`)
    .then(({data, response}) => {
      if (data) {
        dispatch(ActionCreator.updateComments(data));
      }
      if (response && response.data.error) {
        dispatch(ActionCreator.pushError(response.data.error));
      }
    });
  },
  addComment: (filmId, rating, comment) => (dispatch) => {
    return api.post(`/comments/${filmId}`, {rating, comment})
    .then(({data, response}) => {
      if (data) {
        dispatch(ActionCreator.updateComments(data));
        history.push(`/films/${filmId}/reviews`);
      }
      if (response && response.data.error) {
        dispatch(ActionCreator.pushError(response.data.error));
      }
    });
  },
  toggleFavorite: (id, status) => (dispatch) => {
    return api.post(`/favorite/${id}/${status}`)
    .then(({data, response}) => {
      if (data) {
        dispatch(ActionCreator.updateMovie(data));
      }
      if (response && response.data.error) {
        dispatch(ActionCreator.pushError(response.data.error));
      }
    });
  },
  checkAuth: () => (dispatch) => {
    return api.get(`/login`)
      .then(({data, response}) => {
        dispatch(ActionCreator.requireAuthorization(!data));
        if (data) {
          dispatch(ActionCreator.auth(data));
        }
        if (response && response.data.error) {
          dispatch(ActionCreator.pushError(response.data.error));
        }
      });
  },
  login: (email, password) => (dispatch) => {
    return api.post(`/login`, {email, password})
      .then(({data, response}) => {
        if (data) {
          dispatch(ActionCreator.requireAuthorization(false));
          dispatch(ActionCreator.auth(data));
          history.goBack();
        }

        if (response && response.data.error) {
          dispatch(ActionCreator.pushError(response.data.error));
        }
      });
  },
};

export default apiDispatcher;
