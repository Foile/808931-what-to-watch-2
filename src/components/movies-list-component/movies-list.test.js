import React from 'react';
import renderer from "react-test-renderer";
import MoviesList from './movies-list';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(
      <MoviesList
        movies = {[{name: `Macbeth`}, {name: `Aviator`}]}
        onHeaderClick = { jest.fn() }
        onMouseEnter = { ()=> jest.fn() }
      />
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
