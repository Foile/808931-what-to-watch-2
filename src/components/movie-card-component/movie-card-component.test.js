import React from 'react';
import renderer from "react-test-renderer";
import MovieCard from './movie-card-component';

it(`App correctly renders after relaunch`, () => {
  const movie = {name: `Macbeth`};
  const tree = renderer
  .create(<MovieCard
    movie = {movie}
    onHeaderClick = {()=>jest.fn()}
    onMouseEnter={()=>jest.fn()} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

