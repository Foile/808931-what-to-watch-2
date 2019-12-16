import React from "react";
import PropTypes from 'prop-types';
import withActiveItem from "@hocs/with-active-item/with-active-item";

const GenresList = ({genres, onGenreClick, activeItem, onChangeActiveItem = ()=>({})}) =>
  (<ul className="catalog__genres-list">
    { genres.map((genre, i)=>
      (<li className={`catalog__genres-item ${activeItem === i ? `catalog__genres-item--active` : ``}`}
        key={`catalog__genres-item--${genre}-${i}`}
        onClick={(evt)=>{
          evt.preventDefault();
          onChangeActiveItem(i);
          onGenreClick(genre);
        }}>
        <a href="#" className="catalog__genres-link">
          {genre}
        </a>
      </li>))}</ul>);

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGenreClick: PropTypes.func.isRequired,
  activeItem: PropTypes.number,
  onChangeActiveItem: PropTypes.func,
};

export {GenresList};
export default withActiveItem(GenresList);
