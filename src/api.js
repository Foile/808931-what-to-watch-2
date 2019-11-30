
import axios from 'axios';
import ActionCreator from './reducers/action-creator/action-creator';

const API_URL = `https://htmlacademy-react-2.appspot.com`;

export const api = axios.create({
  baseURL: `${API_URL}/wtw`,
  timeout: 5000,
  withCredentials: true,
});

const createAPI = (dispatch) => {

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 401) {
      dispatch(ActionCreator.requireAuthorization(true));
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
