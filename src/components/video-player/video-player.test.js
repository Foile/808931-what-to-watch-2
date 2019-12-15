import React from "react";
import renderer from "react-test-renderer";

import VideoPlayer from "./video-player";

it(`VideoPlayer correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<VideoPlayer
      videoRef={React.createRef()}
      src={``}
      poster={``}
      muted
      width={`280`}
      height={`175`}
      playerState={{}}
    />);

  expect(tree).toMatchSnapshot();
});
