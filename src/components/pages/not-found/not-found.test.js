import React from 'react';
import renderer from "react-test-renderer";
import NotFound from './not-found';
import {BrowserRouter} from "react-router-dom";

it(`NotFound correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<BrowserRouter><NotFound /></BrowserRouter>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
