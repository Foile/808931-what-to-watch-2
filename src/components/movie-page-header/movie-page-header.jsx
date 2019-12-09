import React from "react";
import {shape, string} from "prop-types";
import {Link, BrowserRouter} from "react-router-dom";
import {API_URL} from "../../api";
import Logo from "../logo/logo";

const MovieHeader = (props) => {
  const {auth, movie} = props;
  return <BrowserRouter>
    <header className="page-header movie-card__head">
      <Logo/>
      {movie ? <nav className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={`/films/${movie.id}`}>{movie.name}</Link>
          </li>
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to ={`/films/${movie.id}/review`}>Add review</Link>
          </li>
        </ul>
      </nav> : <React.Fragment/>}
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
    </header></BrowserRouter>;
};

MovieHeader.propTypes = {auth: shape({
  name: string,
  avatarUrl: string
}),
movie: shape({id: string, name: string})};

export default MovieHeader;
