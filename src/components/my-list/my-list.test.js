import React from 'react';
import renderer from 'react-test-renderer';
import {MyList} from './my-list';

jest.mock(`@partials/header/header.jsx`, () => `Header`);
jest.mock(`@partials/catalog/catalog.jsx`, () => `Catalog`);

const props = {
  favoriteMovies: [],
  onLoadFavoriteMovies: () => {},
};

it(`My list page correctly renders after relaunch`, () => {
  const tree = renderer.create(<MyList {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
