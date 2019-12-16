import React from "react";
import renderer from "react-test-renderer";
import Logo from "./logo";
import {BrowserRouter} from "react-router-dom";

it(`Logo correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<BrowserRouter><Logo /></BrowserRouter>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
