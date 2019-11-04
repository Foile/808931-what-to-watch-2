import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import VideoPlayer from "./video-player";

Enzyme.configure({adapter: new Adapter()});


it(`VideoPlayer has pause and play state`, () => {
  const player = mount(<VideoPlayer
    src={``}
    poster={``}
    muted={true}
    width={280}
    height={175}
    playerState={{isPlaying: false}}
  />);
  window.HTMLMediaElement.prototype.load = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };
  expect(player.state().isPlaying).toBe(false);

  player.setProps({playerState: {isPlaying: true}});
  expect(player.state().isPlaying).toBe(true);
});
