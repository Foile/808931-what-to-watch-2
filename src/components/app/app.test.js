import React from 'react';
import renderer from "react-test-renderer";
import {App} from './app';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<App
    films={[{genre: `Comedy`, name: `Mask`, videoLink: ``, previewImage: ``}]}
    onChangeGenre={jest.fn()}
    onGetMovies={jest.fn()}
    genres={[`All genres`, `Comedy`]}/>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
