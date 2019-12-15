import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import withPlayerDuration from "./with-player-duration";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
const MockComponent = () => <progress/>;
const WrappedMockComponent = withPlayerDuration(MockComponent);


describe(`withPlayerDuration test`, () => {

  const spy = jest.spyOn(WrappedMockComponent.prototype, `componentDidMount`).mockImplementationOnce(()=>({
    src: ``
  }));
  const wrapper = shallow(<WrappedMockComponent/>);
  expect(spy).toHaveBeenCalled();

  const currentMovieTime = 50;
  const durationInSec = 600;

  it(`should change timeLeft and percentage state when call handleTimeUpdate`, () => {
    wrapper.instance()._handleTimeUpdate(currentMovieTime, durationInSec);
    expect(wrapper.state().timeLeft).toEqual(durationInSec - currentMovieTime);
    expect(wrapper.state().percentage).toEqual(currentMovieTime / durationInSec * 100);
  });
});
