import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {AddReview} from "./add-review";

it(`AddReview correctly renders after relaunch`, () => {
  const movie = {id: `1`, name: `Macbeth`, posterImage: ``, previewImage: ``, previewVideoLink: ``, starring: [], genre: `Comedy`};
  const tree = renderer
  .create(<BrowserRouter>
    <AddReview
      films = {[movie]}
      match = {{params: {id: `1`}}}
      submitHandler = {jest.fn()}/>
  </BrowserRouter>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
