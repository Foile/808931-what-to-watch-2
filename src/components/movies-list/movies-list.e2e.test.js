import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MoviesList} from './movies-list';
Enzyme.configure({adapter: new Adapter()});

it(`startButton correct run afrer click`, () => {
  const onClick = jest.fn();
  const screen = shallow(
      <MoviesList
        movies ={[
          {id: 1, name: `Macbeth`, previewImage: ``, previewVideoLink: ``},
          {id: 2, name: `Aviator`, previewImage: ``, previewVideoLink: ``}
        ]}
        onHeaderClick = {onClick}
        onMouseEnter = {() => jest.fn()}/>);
  const headers = screen.find(`.small-movie-card catalog__movies-card`);
  headers.forEach((header) => {
    header.simulate(`click`);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
