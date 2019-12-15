import React, {PureComponent} from "react";
import {arrayOf, func, shape, string, number} from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import withActiveItem from "../../hocs/with-active-item/with-active-item";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movies, onChangeActiveItem = () => ({})} = this.props;
    return <div className="catalog__movies-list">{movies.map((movie, i) =>
      <MovieCard key = {`movie-${movie.id}`}
        movie = {movie}
        onMouseEnter= {() => onChangeActiveItem(i)}
        onMouseLeave = {() => onChangeActiveItem(-1)}>
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
  activeItem: number,
  onChangeActiveItem: func,
};

MoviesList.defaultProps = {
  movies: []
};

export {MoviesList};
export default withActiveItem(MoviesList);
