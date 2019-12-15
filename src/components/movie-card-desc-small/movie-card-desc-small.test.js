import React from 'react';
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {MovieCardDescSmall} from './movie-card-desc-small';

it(`MovieCardDescSmall correctly renders after relaunch`, () => {
  const movie = {id: 1, name: `Macbeth`, previewImage: ``, previewVideoLink: ``, genre: `Comedy`};
  const tree = renderer
  .create(<BrowserRouter>
    <MovieCardDescSmall
      movie = {movie}
      review = {true} />
  </BrowserRouter>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
