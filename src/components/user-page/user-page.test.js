import React from 'react';
import renderer from "react-test-renderer";
import UserPage from './user-page';

it(`UserPage correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<UserPage
    submitHandler = {jest.fn()}
    isAuthorizationRequired = {true}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
