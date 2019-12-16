import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {shape, arrayOf, string, number, func, bool} from "prop-types";
import Header from "@components/header/header";
import MoviesList from "@components/movies-list/movies-list";
import PageFooter from "@components/page-footer/page-footer";
import withAuth from "@hocs/with-auth/with-auth";
import apiDispatcher from "@reducers/api-dispatcher/api-dispatcher";

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
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
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
  auth: shape({}),
  favoriteMovies: arrayOf(shape({
    id: number,
    name: string,
    posterImage: string,
    previewImage: string,
    backgroundImage: string,
    backgroundColor: string,
    description: string,
    rating: number,
    scoresCount: number,
    director: string,
    starring: arrayOf(string),
    runTime: number,
    genre: string,
    released: number,
    isFavorite: bool,
    videoLink: string,
    previewVideoLink: string
  })).isRequired,
  onLoadFavoriteMovies: func.isRequired,
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
