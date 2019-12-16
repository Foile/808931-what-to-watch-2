import React from "react";
import renderer from "react-test-renderer";
import {MovieCardTabsReviews} from "./movie-card-tabs-reviews";

it(`MovieCardTabsReviews correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<MovieCardTabsReviews onGetComments={jest.fn()} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
