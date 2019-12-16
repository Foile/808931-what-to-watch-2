import React from "react";
import {number, string, arrayOf} from "prop-types";
import {getRatingDesc} from "@helpers";

const MovieCardTabsOverview = ({rating, scoresCount, director, starring, description}) =>
  <React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getRatingDesc(rating)}</span>
        <span className="movie-rating__count">{scoresCount} ratings</span>
      </p>
    </div>
    <div className="movie-card__text">
      {description}
      <p className="movie-card__director"><strong>Director: {director}</strong></p>
      <p className="movie-card__starring"><strong>Starring: {(starring).join(`, `)} and other</strong></p>
    </div>
  </React.Fragment>;

MovieCardTabsOverview.propTypes = {
  rating: number,
  starring: arrayOf(string),
  director: string,
  description: string,
  scoresCount: number
};

MovieCardTabsOverview.defaultProps = {
  starring: []
};

export default MovieCardTabsOverview;
