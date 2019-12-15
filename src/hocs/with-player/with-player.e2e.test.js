import React from 'react';
import {shallow, configure} from 'enzyme';
import withPlayer from "./with-player";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
const MockComponent = () => <video/>;
const WrappedMockComponent = withPlayer(MockComponent);

describe(`withPlayer test without history`, () => {
  let wrapper;
  let videoRef;

  beforeEach(() => {
    videoRef = {
      play: jest.fn(),
      pause: jest.fn(),
      requestFullscreen: jest.fn(),
    };
    wrapper = shallow(<WrappedMockComponent/>);
    wrapper.instance()._video.current = videoRef;
  });


  it(`should play video when call handlePlayPause if isPlaying false`, () => {
    wrapper.setProps({isPlaying: false});
    wrapper.instance()._handlePlayPause();

    expect(wrapper.instance()._video.current.play).toHaveBeenCalledTimes(1);
    expect(wrapper.instance()._video.current.pause).toHaveBeenCalledTimes(0);
    expect(wrapper.state().isPlaying).toEqual(true);
  });

  it(`should go to full screen when call handleFullScreen`, () => {
    wrapper.instance()._handleFullScreen();

    expect(wrapper.instance()._video.current.requestFullscreen).toHaveBeenCalledTimes(1);
  });
});


