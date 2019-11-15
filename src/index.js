import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from "./reducer";
import films from './mocks/films';


const init = (movies) => {
  const store = createStore(reducer, {genre: `All genres`, films: movies, allFilms: movies});
  ReactDOM.render(<Provider store={store}>
    <App films={movies}/>
  </Provider>,
  document.querySelector(`#root`)
  );
};

init(films);
