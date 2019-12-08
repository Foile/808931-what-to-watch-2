import React from 'react';
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import MovieCard from './movie-card';

it(`MovieCard correctly renders after relaunch`, () => {
  const movie = {id: 1, name: `Macbeth`, previewImage: ``, previewVideoLink: ``};
  const tree = renderer
  .create(<BrowserRouter>
    <MovieCard
      movie = {movie}
      onHeaderClick = {()=>jest.fn()}
      onMouseEnter={()=>jest.fn()} />
  </BrowserRouter>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

