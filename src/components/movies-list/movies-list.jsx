import React, {PureComponent} from "react";
import {arrayOf, func, shape, string, number} from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import withActiveItem from "../../hocs/with-active-item/with-active-item";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movies, onHeaderClick, activeItem, onChangeActiveItem} = this.props;
    return <div className="catalog__movies-list">{movies.map((movie, i) =>
      <MovieCard key = {`movie-${movie.id}`}
        movie = {movie}
        onHeaderClick = {onHeaderClick}
        onMouseEnter = {() => onChangeActiveItem(i)}
        onMouseLeave = {() => onChangeActiveItem(-1)}
        isPlaying={i === activeItem}>
      </MovieCard>
    )}</div>;
  }
}

MoviesList.propTypes = {
  movies: arrayOf(shape({
    id: number,
    name: string,
    previewImage: string
  })).isRequired,
  onHeaderClick: func.isRequired,
  activeItem: number,
  onChangeActiveItem: func,
};

export {MoviesList};
export default withActiveItem(MoviesList);
