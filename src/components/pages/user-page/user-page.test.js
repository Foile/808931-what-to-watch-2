import React from 'react';
import renderer from "react-test-renderer";
import {UserPage} from './user-page';
import {BrowserRouter} from "react-router-dom";

it(`UserPage correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<BrowserRouter>
    <UserPage
      submitHandler = {jest.fn()}
      isAuthorizationRequired = {true}
    /></BrowserRouter>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
