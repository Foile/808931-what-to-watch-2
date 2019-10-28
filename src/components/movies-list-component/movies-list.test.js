import React from 'react';
import renderer from "react-test-renderer";
import MoviesList from './movies-list';

it(`MoviesList correctly renders after relaunch`, () => {
  const tree = renderer
  .create(
      <MoviesList
        movies ={[
          {id: 1, name: `Macbeth`, previewImage: ``},
          {id: 2, name: `Aviator`, previewImage: ``}
        ]}
        onHeaderClick = { jest.fn() }
        onMouseEnter = { ()=> jest.fn() }
      />
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
