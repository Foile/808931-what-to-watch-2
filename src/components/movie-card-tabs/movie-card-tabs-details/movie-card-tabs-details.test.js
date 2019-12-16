import React from "react";
import renderer from "react-test-renderer";
import MovieCardTabsDetails from "./movie-card-tabs-details";

it(`MovieCardTabsReviews correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<MovieCardTabsDetails />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
