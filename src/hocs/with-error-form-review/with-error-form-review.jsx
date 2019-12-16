import React from "react";

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 400;
const ERR_MESSAGE = `Please enter from 50 to 400 symbols`;

const validateForm = (comment) => {
  return (comment && (comment.length >= MIN_REVIEW_LENGTH && comment.length <= MAX_REVIEW_LENGTH));
};

const withErrorFormReview = (Component) => {
  class WithErrorFormReview extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        error: ` `,
      };
      this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(evt) {
      const {value} = evt.target;
      this.setState({
        error: validateForm(value) ? `` : ERR_MESSAGE
      });
    }

    render() {
      return <Component {...this.props}
        error={this.state.error}
        onChange={this._handleChange} />;
    }
  }
  return WithErrorFormReview;
};


export default withErrorFormReview;
