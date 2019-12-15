import React from 'react';
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {VideoPlayerProgress} from './video-player-progress';

it(`VideoPlayerProgress correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<BrowserRouter>
    <VideoPlayerProgress
      progressRef={React.createRef()}
      progressPosition={20}
      toggleRef={React.createRef()}
      timing={`123`}/>
  </BrowserRouter>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

