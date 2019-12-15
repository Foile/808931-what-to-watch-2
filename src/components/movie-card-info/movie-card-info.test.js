import React from 'react';
import renderer from "react-test-renderer";
import MovieCardInfo from './movie-card-info';

it(`MovieCardInfo correctly renders after relaunch`, () => {
  const movie = {id: 1, name: `Macbeth`, previewImage: ``, videoLink: ``};
  const tree = renderer
  .create(<MovieCardInfo
    films = {movie}
    review = {true}
    auth = {{}} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
