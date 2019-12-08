import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import MovieCardDesc from "./movie-card-desc";

it(`MovieCardDesc correctly renders after relaunch`, () => {
  const movie = {id: 1, name: `Macbeth`, previewImage: ``, previewVideoLink: ``, starring: []};
  const tree = renderer
  .create(<BrowserRouter>
    <MovieCardDesc
      movie = {movie}
      match = {{params: {id: 1}}} />
  </BrowserRouter>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
