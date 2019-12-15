import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import MovieCardTabs from "./movie-card-tabs";

it(`MovieCardTabs correctly renders after relaunch`, () => {
  const movie = {id: 1, name: `Macbeth`, previewImage: ``, previewVideoLink: ``, starring: []};
  const tree = renderer
  .create(<BrowserRouter>
    <MovieCardTabs
      movie = {movie}
      match = {{params: {id: 1}}} />
  </BrowserRouter>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
