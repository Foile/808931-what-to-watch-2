import React from 'react';
import renderer from 'react-test-renderer';
import {MoviePlayer} from './movie-player';

const props = {
  currentMovie: {
    name: `Aviator`,
    videoLink: `http://video.com/video.mp4`,
    previewImage: `http://images.com/image1.png`,
    runTime: 100,
  },
  videoRef: React.createRef(),
  onPlayPause: () => {},
  onClosePlayer: () => {},
  onFullScreen: () => {},
  isPlaying: false,
};

it(`Movie player correctly renders after relaunch`, () => {
  const tree = renderer.create(<MoviePlayer {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
