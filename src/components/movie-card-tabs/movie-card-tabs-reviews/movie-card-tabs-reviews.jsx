import React from "react";
import {connect} from "react-redux";
import {number, shape, arrayOf, func} from "prop-types";
import {formatDate} from "@helpers";
import {getSortedComments} from "@selectors";
import apiDispatcher from "@reducers/api-dispatcher/api-dispatcher";

class MovieCardTabsReviews extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onGetComments, id} = this.props;
    onGetComments(id);
  }

  render() {
    const {id, comments} = this.props;
    return <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {
          comments.map((comment) =>
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
}

MovieCardTabsReviews.propTypes = {
  id: number,
  comments: arrayOf(shape({})),
  onGetComments: func
};

MovieCardTabsReviews.defaultProps = {
  comments: []
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

export {MovieCardTabsReviews};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCardTabsReviews);
