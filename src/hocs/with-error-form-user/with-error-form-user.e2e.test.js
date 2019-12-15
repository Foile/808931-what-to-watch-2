import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import withErrorFormUser from "./with-error-form-user";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
const MockComponent = () => <form/>;
const WrappedMockComponent = withErrorFormUser(MockComponent);

it(`withErrorFormUser test`, () => {
  let wrapper = shallow(<WrappedMockComponent />);
  wrapper.instance()._handleChange({target: {name: `user-password`, value: ``}});
  expect(wrapper.state().error).toEqual(`Please fill your password`);
});
