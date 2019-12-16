import React from "react";
import {EMAIL_REGEX} from "@constants";

const ERR_MESSAGE_EMAIL = `Please enter a valid email address`;
const ERR_MESSAGE_EMPTY = `Please fill your`;
const FIELD_NAMES = {'user-email': `email`, 'user-password': `password`};

const validateEmail = (email) => EMAIL_REGEX.test(String(email).toLowerCase());
const validateEmpty = (value) => !value;

const withErrorFormUser = (Component) => {
  class WithErrorFormUser extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        error: ` `
      };
      this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(evt) {
      const {name, value} = evt.target;
      let errorText = validateEmpty(value) ? `${ERR_MESSAGE_EMPTY} ${FIELD_NAMES[name]}` : ``;
      if (name === `user-email`) {
        errorText = validateEmail(value) ? errorText : ERR_MESSAGE_EMAIL;
      }
      this.setState({
        error: errorText
      });
    }

    render() {
      return <Component {...this.props}
        error={this.state.error}
        onChange={this._handleChange} />;
    }
  }
  return WithErrorFormUser;
};

export default (withErrorFormUser);
