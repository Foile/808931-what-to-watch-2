import React from "react";
import {arrayOf, func, shape, string, number} from 'prop-types';
import MovieCard from '../movie-card/movie-card';

const MoviesList = ({movies}) => (
  <div className="catalog__movies-list">{movies.map((movie) =>
    <MovieCard key = {`movie-${movie.id}`}
      movie = {movie}>
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

export default MoviesList;
