import React from "react";
import renderer from "react-test-renderer";
import MovieCardTabsOverwiev from "./movie-card-tabs-overview";

it(`MovieCardTabsOverwiev correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<MovieCardTabsOverwiev />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
