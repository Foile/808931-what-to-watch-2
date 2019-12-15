import React from "react";
import renderer from "react-test-renderer";
import Header from "./header";
import {BrowserRouter} from "react-router-dom";

it(`Header correctly renders after relaunch`, () => {
  const tree = renderer
  .create(
      <BrowserRouter>
        <Header type="movie-card__head"
          auth = {{name: `test`, avatarUrl: `ya.ru`}} />
      </BrowserRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
