import React from "react";
import {string, number, bool, shape} from "prop-types";
import Header from "../header/header";
import MovieCardDescSmall from "../movie-card-desc-small/movie-card-desc-small";


const MovieCardInfo = (props) =>
  props.movie ?
    <React.Fragment>
      <div className="movie-card__bg">
        <img
          src={props.movie.backgroundImage}
          alt={`background ${props.movie.name}`}
        />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header auth={props.auth} ></Header>
      <div className={`movie-card__wrap`}>
        <div className="movie-card__info">
          {props.review ? <MovieCardDescSmall {...props}/> : <React.Fragment/>}
          {!props.review ? <div className={`movie-card__poster`}>
            <img
              src={props.movie.posterImage}
              alt={`${props.movie.name} poster`}
              width="218"
              height="327"
            />
          </div> : <React.Fragment/>}
          {!props.review ? <MovieCardDescSmall {...props}/> : <React.Fragment/>}
        </div>
      </div>
    </React.Fragment>
    : <React.Fragment/>;

MovieCardInfo.propTypes = {
  auth: shape({}),
  review: bool,
  movie: shape({
    name: string,
    genre: string,
    released: number,
    posterImage: string,
    backgroundImage: string,
    backgroundColor: string
  })};

export default MovieCardInfo;
