import React from 'react';
import renderer from "react-test-renderer";
import MainScreen from './main-screen';

it(`App correctly renders after relaunch`, () => {
  const movies = [
    {id: 1, name: `Macbeth`, previewImage: ``, videoLink: ``},
    {id: 2, name: `Aviator`, previewImage: ``, videoLink: ``}
  ];
  const tree = renderer
  .create(<MainScreen movies = {movies} />
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
