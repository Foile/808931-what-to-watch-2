import React from "react";
import {string, shape, arrayOf} from "prop-types";
import MovieCardInfo from "../../movie-card-info/movie-card-info";
import MoviesList from "../../movies-list/movies-list";
import PageFooter from "../../page-footer/page-footer";
import MovieCardTabs from "../../movie-card-tabs/movie-card-tabs";
import {connect} from 'react-redux';
import ActionCreator from "../../../reducers/action-creator/action-creator";
import Constants from "../../../const";

class MovieCardFull extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {films, movie, auth} = this.props;
    const {backgroundColor, posterImage, genre: movieGenre, name} = movie || {};
    return <React.Fragment>
      <section className="movie-card movie-card--full" style={{background: backgroundColor}}>
        <div className="movie-card__hero">
          <MovieCardInfo {... this.props} movie={movie} review={true} auth={auth}/>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>
            <MovieCardTabs {... this.props} movie={movie}/>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList movies = {films.filter(({genre})=> genre === movieGenre).slice(0, Constants.MORE_LIKE_LIMIT)} onHeaderClick={()=>({})}/>
        </section>
        <PageFooter/>
      </div>
    </React.Fragment>;
  }
}

MovieCardFull.propTypes = {
  auth: shape({}),
  movie: shape({
    name: string.isRequired,
    genre: string.isRequired,
    posterImage: string
  }),
  films: arrayOf(shape({
    name: string.isRequired,
    genre: string.isRequired,
    posterImage: string
  })),
  match: shape({
    params: shape({
      id: string.isRequired
    })
  })};

MovieCardFull.defaultProps = {
  films: []
};

const mapStateToProps = (state, ownProps) => {
  const res = Object.assign({}, ownProps, {
    films: state.data.allFilms,
    movie: state.data.allFilms && state.data.allFilms.find(({id}) => id === Number(ownProps.match.params.id)),
    auth: state.user.auth,
  });
  return res;
};

const mapDispatchToProps = (dispatch) => ({
  onGetMovies: (movies) => dispatch(ActionCreator.getMovies(movies))
});

export {MovieCardFull};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCardFull);
