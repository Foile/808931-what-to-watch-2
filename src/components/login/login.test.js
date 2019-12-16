import React from 'react';
import renderer from "react-test-renderer";
import {Login} from './login';

it(`MoviesList correctly renders after relaunch`, () => {
  const tree = renderer
  .create(
      <Login
      />
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
