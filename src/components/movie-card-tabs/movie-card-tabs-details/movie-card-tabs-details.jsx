import React from "react";
import {formatTime} from "@helpers";
import {number, string, arrayOf} from "prop-types";

const MovieCardTabsDetails = ({director, starring, runTime, genre, released}) => <div className="movie-card__text movie-card__row">
  <div className="movie-card__text-col">
    <p className="movie-card__details-item">
      <strong className="movie-card__details-name">Director</strong>
      <span className="movie-card__details-value">{director}</span>
    </p>
    <p className="movie-card__details-item">
      <strong className="movie-card__details-name">Starring</strong>
      <span className="movie-card__details-value">
        { starring.map((actor)=>`${actor}\n`)}
      </span>
    </p>
  </div>
  <div className="movie-card__text-col">
    <p className="movie-card__details-item">
      <strong className="movie-card__details-name">Run Time</strong>
      <span className="movie-card__details-value">{formatTime(runTime, `minutes`, `h[h] m[m]`)}</span>
    </p>
    <p className="movie-card__details-item">
      <strong className="movie-card__details-name">Genre</strong>
      <span className="movie-card__details-value">{genre}</span>
    </p>
    <p className="movie-card__details-item">
      <strong className="movie-card__details-name">Released</strong>
      <span className="movie-card__details-value">{released}</span>
    </p>
  </div>
</div>;

MovieCardTabsDetails.propTypes = {
  director: string,
  starring: arrayOf(string),
  runTime: number,
  genre: string,
  released: number
};
MovieCardTabsDetails.defaultProps = {
  starring: []
};


export default MovieCardTabsDetails;
