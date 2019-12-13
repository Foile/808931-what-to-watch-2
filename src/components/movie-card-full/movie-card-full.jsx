import React from "react";
import {string, shape, arrayOf} from "prop-types";
import {Redirect} from "react-router-dom";
import MovieCardInfo from "../movie-card-info/movie-card-info";
import MoviesList from "../movies-list/movies-list";
import PageFooter from "../page-footer/page-footer";
import MovieCardDesc from "../movie-card-desc/movie-card-desc";
import {connect} from 'react-redux';
import Constants from "../../const";
import ActionCreator from "../../reducers/action-creator/action-creator";
import apiDispatcher from "../../reducers/api-dispatcher/api-dispatcher";

class MovieCardFull extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {films, movie, auth, comments} = this.props;
    const {backgroundColor, posterImage, genre: movieGenre, name} = movie || {};
    return <React.Fragment>
      <section className="movie-card movie-card--full" style={{background: backgroundColor}}>
        <div className="movie-card__hero">
          <MovieCardInfo {... this.props} movie={movie} review={true} auth={auth}></MovieCardInfo>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>
            <MovieCardDesc {... this.props} movie={movie} comments={comments}/>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList movies = {films.filter(({genre})=> genre === movieGenre)} onHeaderClick={()=>({})}/>
        </section>
        <PageFooter/>
      </div>
    </React.Fragment>;
  };
}

MovieCardFull.propTypes = {
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
  films: [],
  comments: []
};

MovieCardFull.componentDidMount = () =>{
  console.log(`onGetComments`, match.params.id)
  const {onGetComments, match} = this.props;
  
  onGetComments(match.params.id);
}

const mapStateToProps = (state, ownProps) => {
  const res = Object.assign({}, ownProps, {
    films: state.data.allFilms,
    movie: state.data.allFilms && state.data.allFilms.find(({id}) => id === Number(ownProps.match.params.id)),
    auth: state.user.auth,
    comments: (state.data.comments && state.data.comments.length > 0 ) ?
      state.data.comments||[].find(({filmId}) => filmId === Number(ownProps.match.params.id)).comments :
      [],
  });
  return res;
};

const mapDispatchToProps = (dispatch) => ({
  onGetMovies: (movies) => dispatch(ActionCreator.getMovies(movies)),
  onGetComments: (id) => dispatch(apiDispatcher.loadFilmComments(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(MovieCardFull);
