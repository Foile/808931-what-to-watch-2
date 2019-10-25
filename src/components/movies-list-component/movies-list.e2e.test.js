import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoviesList from './movies-list';
Enzyme.configure({adapter: new Adapter()});

it(`startButton correct run afrer click`, () => {
  const onClick = jest.fn();
  const screen = shallow(
      <MoviesList
        movies = {[{name: `Macbeth`}, {name: `Aviator`}]}
        onHeaderClick = {onClick}
        onMouseEnter = {() => jest.fn()
        }/>);
  const headers = screen.find(`.small-movie-card catalog__movies-card`);
  headers.forEach((header) => {
    header.simulate(`click`);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
