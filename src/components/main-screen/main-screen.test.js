import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen";
import {BrowserRouter} from "react-router-dom";

it(`App correctly renders after relaunch`, () => {
  const movies = [
    {id: 1, name: `Macbeth`, previewImage: ``, videoLink: ``},
    {id: 2, name: `Aviator`, previewImage: ``, videoLink: ``}
  ];
  const tree = renderer
  .create(<BrowserRouter>
    <MainScreen movies = {movies} onChangeGenre={jest.fn()} genres={[`All genres`, `Comedy`]} />
  </BrowserRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
