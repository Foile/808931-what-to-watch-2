import React from "react";
import {shape, string, number} from "prop-types";
import {Link} from "react-router-dom";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";

const Header = (props) => {
  const {auth, movie, type, title} = props;
  const {id, name} = movie || {};
  return <React.Fragment>
    <header className={`page-header ${type}`}>
      <Logo/>
      {title ? <h1 className="page-title user-page__title">{title}</h1> : <React.Fragment/>}
      {movie ? <nav className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={`/films/${id}`}>{name}</Link>
          </li>
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to ={`/films/${id}/review`}>Add review</Link>
          </li>
        </ul>
      </nav> : <React.Fragment/>}
      <UserBlock auth={auth}></UserBlock>
    </header></React.Fragment>;
};

Header.propTypes = {
  auth: shape({
    name: string,
    avatarUrl: string
  }),
  type: string,
  title: string,

  movie: shape({id: number, name: string})};

export default Header;
