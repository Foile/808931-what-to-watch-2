import React from "react";
import PropTypes from 'prop-types';

class GenresList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {genres} = this.props;

    const listGenres = genres.map((genre)=>
      <li className="catalog__genres-item" key={`catalog__genres-item--${genre}`}>
        <a href="#" className="catalog__genres-link">
          {genre}
        </a>
      </li>
    );
    return <ul className="catalog__genres-list">{listGenres}</ul>;
  }
}

GenresList.propTypes = {genres: PropTypes.arrayOf(PropTypes.string)};

export default GenresList;
