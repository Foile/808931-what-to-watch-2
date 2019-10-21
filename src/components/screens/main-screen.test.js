import React from 'react';
import renderer from "react-test-renderer";
import MainScreen from './main-screen';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<MainScreen />
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
