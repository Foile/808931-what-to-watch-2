import React from 'react';
import renderer from "react-test-renderer";
import NotFound from './not-found';

it(`NotFound correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<NotFound />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
