import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";
import {BrowserRouter} from "react-router-dom";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<BrowserRouter><App
    films={[{genre: `Comedy`, name: `Mask`, videoLink: ``, previewImage: ``}]}
    onChangeGenre={jest.fn()}
    onGetMovies={jest.fn()}
    genres={[`All genres`, `Comedy`]}/>
  </BrowserRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
