import React from "react";
import renderer from "react-test-renderer";

import VideoPlayer from "./video-player";

it(`VideoPlayer correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<VideoPlayer
      src={``}
      poster={``}
      muted={true}
      width={280}
      height={175}
      playerState={{}}
    />);

  expect(tree).toMatchSnapshot();
});
