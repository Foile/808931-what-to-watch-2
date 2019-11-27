import React from "react";
import ReactDOM from "react-dom";

import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';

import reducer from "./reducers/reducer/reducer";
import apiDispatcher from "./reducers/api-dispatcher/api-dispatcher";
import createAPI from "./api";
import App from "./components/app/app";

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));

  const store = createStore(reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f)
  );

  store.dispatch(apiDispatcher.checkAuth());
  store.dispatch(apiDispatcher.loadFilms());

  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
