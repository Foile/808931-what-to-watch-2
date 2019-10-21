import React from 'react';
import renderer from "react-test-renderer";
import MoviesList from './movies-list';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<MoviesList movies = {[`Macbeth`, `Aviator`, `Revenant`, `Orlando`]} />
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
