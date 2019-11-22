import React from 'react';
import renderer from "react-test-renderer";
import {GenresList} from './genres-list';

it(`App correctly renders after relaunch`, () => {
  const genres = [`Comedy`, `Drama`];
  const tree = renderer
  .create(<GenresList genres = {genres} onGenreClick={jest.fn()}/>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
