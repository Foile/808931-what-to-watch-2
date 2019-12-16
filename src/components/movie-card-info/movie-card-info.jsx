import React from "react";
import {string, number, bool, shape} from "prop-types";
import Header from "@components/header/header";
import MovieCardDescSmall from "@components/movie-card-desc-small/movie-card-desc-small";
import {MovieCardInfoConstants} from "@constants";

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
      <Header auth={props.auth} type="movie-card__head"></Header>
      <div className={`movie-card__wrap`}>
        <div className="movie-card__info">
          {props.review && <MovieCardDescSmall {...props}/> }
          {!props.review && (
            <div className={`movie-card__poster`}>
              <img
                src={props.movie.posterImage}
                alt={`${props.movie.name} poster`}
                width={MovieCardInfoConstants.WIDTH}
                height={MovieCardInfoConstants.HEIGTH}
              />
            </div>
          )}
          {!props.review && <MovieCardDescSmall {...props}/>}
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
