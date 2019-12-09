import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import MovieCardFull from "./movie-card-full";

it(`MovieCardFull correctly renders after relaunch`, () => {
  const movie = {id: `1`, name: `Macbeth`, posterImage: ``, previewImage: ``, previewVideoLink: ``, starring: [], genre: `Comedy`};
  const tree = renderer
  .create(<BrowserRouter>
    <MovieCardFull
      films = {[movie]}
      match = {{params: {id: `1`}}} /></BrowserRouter>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
