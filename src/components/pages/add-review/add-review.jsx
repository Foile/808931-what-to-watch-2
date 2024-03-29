import React from "react";
import {compose} from "redux";
import {connect} from 'react-redux';
import {string, number, func, shape, arrayOf} from "prop-types";
import Constants from "@src/const";
import {increaseBrightness, getContrast} from "@helpers";
import apiDispatcher from "@reducers/api-dispatcher/api-dispatcher";
import Header from "@components/header/header";
import withActiveItem from "@hocs/with-active-item/with-active-item";
import withErrorFormReview from "@hocs/with-error-form-review/with-error-form-review";
import withAuth from "@hocs/with-auth/with-auth";

const AddReview = (props) => {
  const {onAddComment, movie, match, onChangeActiveItem, activeItem, auth, error, onChange} = props;
  const {id, backgroundColor, backgroundImage, name, posterImage} = movie;
  return <section className="movie-card movie-card--full" style={{background: backgroundColor}}>
    <div className="movie-card__header">
      <div className="movie-card__bg">
        <img
          src={backgroundImage}
          alt={`background ${name}`}
        />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header auth={auth} movie={movie}></Header>
      <div className="movie-card__poster movie-card__poster--small">
        <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
      </div>
    </div>
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={
        (evt) => {
          evt.preventDefault();
          const rating = (activeItem || Constants.DEF_STAR);
          const comment = evt.target.querySelector(`#review-text`).value;
          if (!error) {
            onAddComment(match.params.id, rating, comment);
          }
        }
      }>
        {
          error && <div className="add-review__message"
            style={{color: getContrast(backgroundColor)}}>
            <p>{error}</p>
          </div>
        }
        <div className="rating">
          <div className="rating__stars">
            {Constants.STARS.map((rating) => {
              const isChecked = rating === (activeItem || Constants.DEF_STAR);
              return <React.Fragment key = {`rating-movie-${id}-input-${rating}`}>
                <input className={`rating__input`}
                  checked={isChecked}
                  id={`star-${rating}`}
                  type="radio"
                  name="rating"
                  value={`${rating}`}
                  onChange={()=>{
                    onChangeActiveItem(rating);
                  }}/>
                <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
              </React.Fragment>;
            }
            )}
          </div>
        </div>

        <div className="add-review__text" style={{background: increaseBrightness(backgroundColor, 20)}}>
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={onChange}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" style={{color: getContrast(backgroundColor)}}>Post</button>
          </div>
        </div>
      </form>
    </div>
  </section>;
};

AddReview.propTypes = {
  error: string,
  onChange: func,
  onAddComment: func,
  onChangeActiveItem: func,
  activeItem: number,
  auth: shape({}),
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
  match: shape({
    params: shape({
      id: string
    })
  })
};

AddReview.defaultProps = {
  films: [],
  movie: {
    backgroundColor: ``
  }
};

const mapStateToProps = (state, ownProps) => {
  const res = Object.assign({}, ownProps, {
    films: state.data.allFilms,
    movie: state.data.allFilms && state.data.allFilms.find(({id}) => id === Number(ownProps.match.params.id)),
    auth: state.user.auth
  });
  return res;
};

const mapDispatchToProps = (dispatch) => ({
  onAddComment: (movieId, rating, text) => dispatch(apiDispatcher.addComment(movieId, rating, text)),
});

export {AddReview};
const enhance = compose(
    withActiveItem,
    withAuth,
    withErrorFormReview,
    connect(mapStateToProps, mapDispatchToProps));

export default enhance(AddReview);


