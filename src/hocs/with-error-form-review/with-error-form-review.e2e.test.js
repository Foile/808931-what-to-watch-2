import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import withErrorFormReview from "./with-error-form-review";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
const MockComponent = () => <form/>;
const WrappedMockComponent = withErrorFormReview(MockComponent);

it(`withErrorFormReview test`, () => {
  let wrapper = shallow(<WrappedMockComponent />);
  wrapper.instance()._handleChange({target: {value: `test`}});
  expect(wrapper.state().error).toEqual(`Please enter from 50 to 400 symbols`);
});
