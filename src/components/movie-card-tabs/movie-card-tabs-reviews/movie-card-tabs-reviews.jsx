import React from "react";
import {number, shape, arrayOf, func} from "prop-types";
import {connect} from "react-redux";
import {formatDate} from "../../../helpers/helpers";
import apiDispatcher from "../../../reducers/api-dispatcher/api-dispatcher";
import {getSortedComments} from "../../../selectors/selectors";

class MovieCardTabsReviews extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {id, comments} = this.props;
    return <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {
          comments && comments.map((comment) =>
            <div className="review" key={`movie-${id}-comment-${comment.id}`}>
              <blockquote className="review__quote">
                <p className="review__text">{comment.comment}</p>
                <footer className="review__details">
                  <cite className="review__author">{comment.user.name}</cite>
                  <time className="review__date" dateTime={`${comment.date}`}>{formatDate(comment.date, `MMMM DD, YYYY`)}</time>
                </footer>
              </blockquote>
              <div className="review__rating">{comment.rating}</div>
            </div>
          ) }
      </div>
    </div>;
  }

  componentDidMount() {
    const {onGetComments, id} = this.props;
    onGetComments(id);
  }
}

MovieCardTabsReviews.propTypes = {
  id: number,
  comments: arrayOf(shape({})),
  onGetComments: func
};

const mapStateToProps = (state, ownProps) => {
  const res = Object.assign({}, ownProps, {
    id: Number(ownProps.match.params.id),
    comments: getSortedComments(state),
  });
  return res;
};

const mapDispatchToProps = (dispatch) => ({
  onGetComments: (id) => dispatch(apiDispatcher.loadFilmComments(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(MovieCardTabsReviews);
