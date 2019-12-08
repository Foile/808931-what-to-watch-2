import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";
import {BrowserRouter} from "react-router-dom";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<BrowserRouter><App
    films={[{id: 1, genre: `Comedy`, name: `Mask`, previewVideoLink: ``, previewImage: ``}]}
    onChangeGenre={jest.fn()}
    onGetMovies={jest.fn()}
    genres={[`All genres`, `Comedy`]}/>
  </BrowserRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
