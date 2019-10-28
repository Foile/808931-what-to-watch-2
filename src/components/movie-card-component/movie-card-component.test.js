import React from 'react';
import renderer from "react-test-renderer";
import MovieCard from './movie-card-component';

it(`MovieCard correctly renders after relaunch`, () => {
  const movie = {id: 1, name: `Macbeth`, previewImage: ``};
  const tree = renderer
  .create(<MovieCard
    movie = {movie}
    onHeaderClick = {()=>jest.fn()}
    onMouseEnter={()=>jest.fn()} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

