import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import withPlayOnHover from "./with-play-on-hover";
import Constants from "../../const";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
const MockComponent = () => <video/>;
const WrappedMockComponent = withPlayOnHover(MockComponent);

describe(`withPlayOnHover tests`, () => {
  let wrapper;
  let videoRef;

  beforeEach(() => {
    videoRef = {
      play: jest.fn(),
      load: jest.fn(),
    };
    wrapper = shallow(<WrappedMockComponent/>);
    wrapper.instance()._videoRef.current = videoRef;
  });

  it(`video starts to play when call handleMouseEnter after MOVIE_PREVIEW_DELAY seconds`, () => {
    wrapper.instance()._handleMouseEnter();

    expect(wrapper.instance()._videoRef.current.play).toHaveBeenCalledTimes(0);
    expect(wrapper.instance()._videoRef.current.load).toHaveBeenCalledTimes(0);

    setTimeout(() => {
      expect(wrapper.instance()._videoRef.current.play).toHaveBeenCalledTimes(1);
      expect(wrapper.instance()._videoRef.current.load).toHaveBeenCalledTimes(0);
    }, Constants.MOVIE_PREVIEW_DELAY);
  });

  it(`video stops to play when call handleMouseLeave`, () => {
    wrapper.instance()._handleMouseLeave();
    expect(wrapper.instance()._videoRef.current.play).toHaveBeenCalledTimes(0);
    expect(wrapper.instance()._videoRef.current.load).toHaveBeenCalledTimes(1);
  });
});
