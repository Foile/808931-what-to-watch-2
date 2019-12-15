import React from 'react';
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list";

it(`MoviesList correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<BrowserRouter>
    <MoviesList
      movies ={[
        {id: 1, name: `Macbeth`, previewImage: ``, previewVideoLink: ``},
        {id: 2, name: `Aviator`, previewImage: ``, previewVideoLink: ``}
      ]}
      onHeaderClick = { jest.fn() }
      onMouseEnter = { ()=> jest.fn() }
    />
  </BrowserRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
