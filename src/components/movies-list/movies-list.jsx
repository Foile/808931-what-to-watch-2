import React from "react";
import {arrayOf, func, shape, string, number} from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const MoviesList = ({movies, onHeaderClick, onMouseEnter}) => (
  <div className="catalog__movies-list">{movies.map((movie) =>
    <MovieCard key = {`movie-${movie.id}`}
      movie = {movie}
      onHeaderClick = {onHeaderClick}
      onMouseEnter={onMouseEnter}>
    </MovieCard>
  )}</div>
);

MoviesList.propTypes = {
  movies: arrayOf(shape({
    id: number,
    name: string,
    previewImage: string
  })).isRequired,
  onHeaderClick: func,
  onMouseEnter: func};

export {MoviesList};
export default withActiveItem(MoviesList);
