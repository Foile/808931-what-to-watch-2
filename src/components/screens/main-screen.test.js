import React from 'react';
import renderer from "react-test-renderer";
import MainScreen from './main-screen';

it(`App correctly renders after relaunch`, () => {
  const movies = [{name: `Macbeth`}, {name: `Aviator`}];
  const tree = renderer
  .create(<MainScreen movies = {movies} />
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
