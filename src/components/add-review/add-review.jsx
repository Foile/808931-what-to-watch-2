import React from "react";
import {string, number, func, bool, shape, arrayOf} from "prop-types";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import Header from "../header/header";
import history from "../../history";
import apiDispatcher from "../../reducers/api-dispatcher/api-dispatcher";
import {connect} from 'react-redux';
import {increaseBrightness} from "../../helpers/helpers";
import {compose} from "redux";
import withAuth from "../../hocs/with-auth/with-auth";

const AddReview = (props) => {
  const {addComment, films, match, onChangeActiveItem, activeItem, auth} = props;
  const movie = films.find(({id}) => id === Number(match.params.id));
  if (!movie) {
    return history.push(`/`);
  };

  return <section className="movie-card movie-card--full" style={{background: movie.backgroundColor}}>
    <div className="movie-card__header">
      <div className="movie-card__bg">
        <img
          src={movie.backgroundImage}
          alt={`background ${movie.name}`}
        />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header auth={auth} movie={movie}></Header>
      <div className="movie-card__poster movie-card__poster--small">
        <img src={movie.posterImage} alt={`${movie.name} poster`} width="218" height="327" />
      </div>
    </div>
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={
        (evt) => {
          evt.preventDefault();
          const rating = activeItem;
          const comment = evt.target.querySelector(`#review-text`).value;
          addComment(match.params.id, rating, comment);
        }
      }>
        <div className="rating">
          <div className="rating__stars">
            { [1, 2, 3, 4, 5].map((rating) => <React.Fragment key = {`rating-movie-input-${rating}`}>
              <input className="rating__input"
                id={`star-${rating}`}
                type="radio"
                name="rating"
                value={`${rating}`}
                onChange={()=>{
                  onChangeActiveItem(rating);
                }}/>
              <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
            </React.Fragment>
            )}
          </div>
        </div>

        <div className="add-review__text" style={{background: increaseBrightness(movie.backgroundColor, 20)}}>
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" style={{color: increaseBrightness(movie.backgroundColor, -50)}}>Post</button>
          </div>
        </div>
      </form>
    </div>;
  </section>;
};


AddReview.propTypes = {
  activeItem: number,
  auth: shape({}),
  films: arrayOf(shape({
  })),
  movie: shape({
    name: string,
    genre: string,
    director: string,
    released: number,
    posterImage: string,
    backgroundImage: string,
    runTime: number,
    starring: arrayOf(string)
  }),
  submitHandler: func,
  match: shape({
    params: shape({
      id: string
    })
  })
};

AddReview.defaultProps = {
  activeItem: 0,
  films:[]
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
  addComment: (movieId, rating, text) => dispatch(apiDispatcher.addComment(movieId, rating, text)),
});

export {AddReview};
const enhance = compose(
  withActiveItem,
  withAuth,
  connect(mapStateToProps, mapDispatchToProps));

export default enhance(AddReview)


