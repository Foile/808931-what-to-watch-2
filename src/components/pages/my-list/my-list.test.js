import React from "react";
import renderer from "react-test-renderer";
import {MyList} from "./my-list";
import {BrowserRouter} from "react-router-dom";

const props = {
  favoriteMovies: [],
  onLoadFavoriteMovies: () => {},
};

it(`My list page correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <MyList {...props}/>
      </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
