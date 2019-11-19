import React from "react";
import PropTypes from 'prop-types';
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const GenresList = ({genres, onGenreClick, activeItem = null}) =>
  (<ul className="catalog__genres-list">
    { genres.map((genre)=>
      (<li className="catalog__genres-item" key={`catalog__genres-item--${genre}`} onActiveChange={()=>{
        onGenreClick(activeItem);
      }}>
        <a href="#" className="catalog__genres-link" id={genre}>
          {genre}
        </a>
      </li>))}</ul>);

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  onGenreClick: PropTypes.func,
  activeItem: PropTypes.string,
  onActiveChange: PropTypes.func,
};

export {GenresList};
export default withActiveItem(GenresList);
