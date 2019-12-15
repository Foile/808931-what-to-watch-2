import React from 'react';
import renderer from "react-test-renderer";
import {withAuth} from './with-auth';
import Enzyme from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
const MockComponent = () => <div/>;
const WrappedMockComponent = withAuth(MockComponent);

it(`withAuth correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<WrappedMockComponent
    isAuthorizationRequired = {false}/>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

