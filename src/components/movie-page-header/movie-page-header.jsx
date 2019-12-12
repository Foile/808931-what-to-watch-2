import React from "react";
import {shape, string, number} from "prop-types";
import {Link, BrowserRouter} from "react-router-dom";
import {API_URL} from "../../api";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";

const MovieHeader = (props) => {
  const {auth, movie} = props;
  return <React.Fragment>
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
      <UserBlock auth={auth}></UserBlock>
    </header></React.Fragment>;
};

MovieHeader.propTypes = {auth: shape({
  name: string,
  avatarUrl: string
}),
movie: shape({id: number, name: string})};

export default MovieHeader;
