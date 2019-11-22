import React from "react";
import PropTypes from 'prop-types';

const GenresList = ({genres, onGenreClick}) =>
  (<ul className="catalog__genres-list">
    { genres.map((genre)=>
      (<li className="catalog__genres-item" key={`catalog__genres-item--${genre}`} onClick={(evt)=>{
        evt.preventDefault();
        onGenreClick(genre);
      }}>
        <a href="#" className="catalog__genres-link" id={genre}>
          {genre}
        </a>
      </li>))}</ul>);

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGenreClick: PropTypes.func.isRequired
};

export default GenresList;
