import React from "react";
import {string, shape, number, arrayOf, bool} from "prop-types";
import {Link} from "react-router-dom";
import MovieCardTebsDetails from "./movie-card-tabs-details/movie-card-tabs-details";
import MovieCardTabsReviews from "./movie-card-tabs-reviews/movie-card-tabs-reviews";
import MovieCardTabsOverview from "./movie-card-tabs-overview/movie-card-tabs-overview";
import Constants from "@constants";

const tabSwitch = (nav = `overview`, movie, props) => {
  switch (nav) {
    case `details`:
      return <MovieCardTebsDetails {... movie}/>;
    case `reviews`: return <MovieCardTabsReviews {... props}/>;
    default: return <MovieCardTabsOverview {... movie}/>;
  }
};

const MovieCardTabs = (props)=> {
  const {movie, match} = props;
  const {id} = movie || {};
  const path = !match.params.nav ? `overview` : match.params.nav;
  return <div className="movie-card__desc">
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Constants.TABS.map((nav) => <li
          key={`nav-list-item--${nav}`}
          className={`movie-nav__item ${path === nav.toLowerCase() ? `movie-nav__item--active` : ``}`}>
          <Link to={`/films/${id}/${nav.toLowerCase()}`} className="movie-nav__link">{nav}</Link>
        </li>
        )}
      </ul>
    </nav>
    {
      tabSwitch(match.params.nav, movie, props)
    }
  </div>
  ;
};

MovieCardTabs.propTypes = {
  review: bool,
  movie: shape({
    name: string,
    genre: string,
    director: string,
    released: number,
    posterImage: string,
    backgroundImage: string,
    runTime: number,
    starring: arrayOf(string)
  }),
  match: shape({
    params: shape({
      nav: string
    })
  })
};

export default MovieCardTabs;
