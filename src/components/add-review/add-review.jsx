import React from "react";
import {Redirect} from "react-router-dom";
import {string, number, func, bool, shape, arrayOf} from "prop-types";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import MovieHeader from "../movie-page-header/movie-page-header";

const AddReview = (props) => {
  const {submitHandler, isAuthorizationRequired, films, match, onChangeActiveItem, activeItem, auth} = props;
  const movie = films.find(({id}) => id === Number(match.params.id));
  return isAuthorizationRequired === false ? <Redirect to="/login"></Redirect> :
    <section className="movie-card movie-card--full" style={{background: movie.backgroundColor}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img
            src={movie.backgroundImage}
            alt={`background ${movie.name}`}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <MovieHeader auth={auth} movie={movie}></MovieHeader>
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
            submitHandler(match.params.id, rating, comment);
          }
        }>
          <div className="rating">
            <div className="rating__stars">
              { [1, 2, 3, 4, 5].map((rating) =><React.Fragment key = {`rating-movie-input-${rating}`}>
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

          <div className="add-review__text" style={{background: movie.backgroundColor}}>
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>;
    </section>;
};


AddReview.propTypes = {isAuthorizationRequired: bool,
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
  onChangeActiveItem: func,
  match: shape({
    params: shape({
      id: string
    })
  })
};
export {AddReview};
export default withActiveItem(AddReview);
