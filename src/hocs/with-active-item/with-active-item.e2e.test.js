import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import withActiveItem from "./with-active-item";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
const MockComponent = () => <div/>;
const WrappedMockComponent = withActiveItem(MockComponent);

it(`withActiveItem test`, () => {
  let wrapper = shallow(<WrappedMockComponent/>);
  wrapper.instance()._onChangeActiveItemHandler(3);
  expect(wrapper.state().activeItem).toEqual(3);
});

