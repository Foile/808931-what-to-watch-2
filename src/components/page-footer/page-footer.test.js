import React from 'react';
import renderer from "react-test-renderer";
import PageFooter from './page-footer';

it(`PageFooter correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<PageFooter />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
