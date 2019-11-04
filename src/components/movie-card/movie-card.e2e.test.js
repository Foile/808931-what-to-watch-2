import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card';
Enzyme.configure({adapter: new Adapter()});

it(`MovieCard correct run afrer click and mouseEnter`, () => {
  const onClick = jest.fn();
  const onMouseEnter = jest.fn();
  const movie = {id: 1, name: `Macbeth`, previewImage: ``, videoLink: ``};
  const screen = shallow(
      <MovieCard
        movie = {movie}
        onHeaderClick = {onClick}
        onMouseEnter={onMouseEnter}/>);
  const headers = screen.find(`.small-movie-card catalog__movies-card`);
  headers.forEach((header) => {
    header.simulate(`click`);
    expect(onClick).toHaveBeenCalledTimes(1);
    header.simulate(`mouseEnter`, {
      preventDefault: () => {
      },
      target: {
        value: movie
      }
    });
    expect(onMouseEnter.toHaveBeenCalledTimes(1));
    expect(onMouseEnter.toHaveBeenCalledWith(movie));
  });
});
