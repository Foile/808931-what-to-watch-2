import React from "react";
import {PropTypes} from "prop-types";
import {Link} from "react-router-dom";
import {API_URL} from "../../api";

const MovieHeader = (props) => {
  const {auth} = props;
  return <header className="page-header movie-card__head">
    <div className="logo">
      <a className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>

    <div className="user-block">
      { auth ? <div className="user-block__avatar">
        <img
          src={`${API_URL}/${auth.avatarUrl}`}
          alt={auth.name}
          width="63"
          height="63"
        />
      </div> :
        <Link to="/login">Sign in</Link>}
    </div>
  </header>;
};

MovieHeader.propTypes = {auth: PropTypes.shape({name: PropTypes.string, avatarUrl: PropTypes.string})};

export default MovieHeader;
