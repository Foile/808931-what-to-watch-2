import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Header from "../../components/header/header";
import MoviesList from "../movies-list/movies-list";
import PageFooter from "../page-footer/page-footer";

import withAuth from "../../hocs/with-auth/with-auth";
import apiDispatcher from "../../reducers/api-dispatcher/api-dispatcher";

class MyList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onLoadFavoriteMovies} = this.props;
    onLoadFavoriteMovies();
  }

  render() {
    const {favoriteMovies, auth} = this.props;

    return (
      <div className="user-page">
        <Header auth={auth} type="user-page__head" title="My list"/>
        <section class="catalog">
        <h2 class="catalog__title visually-hidden">Catalog</h2>
        <MoviesList movies={favoriteMovies} />
        </section>
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
  favoriteMovies: state.user.favoriteMovies,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavoriteMovies: () => dispatch(apiDispatcher.loadFavoriteFilms())
});

export {MyList};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuth
)(MyList);
