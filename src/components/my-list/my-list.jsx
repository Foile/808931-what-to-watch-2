import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";

// import {loadFavorite} from "@store/movies-data/actions";
// import {getFavoriteMovies} from "@store/movies-data/selectors";

import MovieHeader from "../../components/movie-page-header/movie-page-header";
import MoviesList from "../movies-list/movies-list";
import PageFooter from "../page-footer/page-footer";

import withAuth from "../../hocs/with-auth/with-auth";

class MyList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onLoadFavoriteMovies} = this.props;
    onLoadFavoriteMovies();
  }

  render() {
    const {favoriteMovies} = this.props;

    return (
      <div className="user-page">
        <MovieHeader
        />

        <MoviesList
          movies={favoriteMovies}
        />

        <PageFooter/>
      </div>
    );
  }

}

MyList.defaultProps = {
  favoriteMovies: [],
  onLoadFavoriteMovies: () => {},
};

MyList.propTypes = {
  favoriteMovies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string
  })).isRequired,
  onLoadFavoriteMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteMovies: getFavoriteMovies(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavoriteMovies: bindActionCreators(loadFavorite, dispatch)
});

export {MyList};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuth
)(MyList);
