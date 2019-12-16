import React from 'react';
import renderer from "react-test-renderer";
import UserBlock from './user-block';
import {BrowserRouter} from "react-router-dom";

it(`UserPage correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<BrowserRouter>
    <UserBlock
      onSubmit = {jest.fn()}
      isAuthorizationRequired = {true}
    /></BrowserRouter>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
