import React, {PureComponent} from "react";
import {arrayOf, shape, string, func} from "prop-types";
import MoviesList from "../movies-list/movies-list";
import GenresList from "../genres-list/genres-list";
import {Link} from "react-router-dom";
import {API_URL} from "../../api";

export default class MainScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movies, onChangeGenre, genres, auth} = this.props;
    return (
      <React.Fragment>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img
              src="img/bg-the-grand-budapest-hotel.jpg"
              alt="The Grand Budapest Hotel"
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              { auth ? <div className="user-block__avatar">
                <img
                  src={`${API_URL}/${auth.avatarUrl}`}
                  alt={auth.name}
                  width="63"
                  height="63"
                />
              </div> :
                <Link to="/login">Sign in</Link>}
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img
                  src="img/the-grand-budapest-hotel-poster.jpg"
                  alt="The Grand Budapest Hotel poster"
                  width="218"
                  height="327"
                />
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">Drama</span>
                  <span className="movie-card__year">2014</span>
                </p>

                <div className="movie-card__buttons">
                  <button
                    className="btn btn--play movie-card__button"
                    type="button"
                    onClick = {()=>{
                    }}
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button
                    className="btn btn--list movie-card__button"
                    type="button"
                    onClick = {()=>{
                    }}
                  >
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <GenresList genres = {genres} onGenreClick={onChangeGenre}/>
            <MoviesList movies = {movies} onHeaderClick={()=>({})}/>
            <div className="catalog__more">
              <button className="catalog__button" type="button">
              Show more
              </button>
            </div>
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

MainScreen.propTypes = {movies: arrayOf(shape({name: string})).isRequired,
  onChangeGenre: func.isRequired,
  auth: shape({}),
  genres: arrayOf(string)};
