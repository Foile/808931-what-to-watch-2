import React from "react";
import {Redirect} from "react-router-dom";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import MovieHeader from "../movie-page-header";

const AddReview = (props) => {
  const {submitHandler, isAuthorizationRequired, films, match, onChangeActiveItem, activeItem, auth} = props;
  console.log(props);
  return isAuthorizationRequired === false ? <Redirect to="/login"></Redirect> :
    <section className="movie-card movie-card--full">
      <MovieHeader auth={auth} />

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

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>;
    </section>;
};

export {AddReview};
export default withActiveItem(AddReview);
