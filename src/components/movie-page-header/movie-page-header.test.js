import React from 'react';
import renderer from "react-test-renderer";
import MoviePageHeader from './movie-page-header';

it(`MoviePageHeader correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<MoviePageHeader
    auth = {{name: `test`, avatarUrl: `ya.ru`}} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
