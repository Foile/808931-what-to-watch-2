import React from "react";
import PropTypes from 'prop-types';

class GenresList extends React.PureComponent {
  constructor(props) {
    super(props);

    this._onGenreClick = props.onGenreClick;
    this._clickHandler = this._clickHandler.bind(this);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._onGenreClick(evt.target.id);
  }

  render() {
    const {genres} = this.props;

    const listGenres = genres.map((genre)=>
      <li className="catalog__genres-item" key={`catalog__genres-item--${genre}`} onClick={this._clickHandler}>
        <a href="#" className="catalog__genres-link" id={genre}>
          {genre}
        </a>
      </li>
    );
    return <ul className="catalog__genres-list">{listGenres}</ul>;
  }
}

GenresList.propTypes = {genres: PropTypes.arrayOf(PropTypes.string),
  onGenreClick: PropTypes.func};

export default GenresList;
