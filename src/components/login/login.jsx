import React from "react";
import PropTypes from "prop-types";
import {Redirect} from 'react-router-dom';

const Login = (props) => {
  const {isAuthorizationRequired, submitHandler} = props;
  console.log(props);
  return isAuthorizationRequired ? <div className="sign-in user-page__content">
    <form action="#" className="sign-in__form" onSubmit={
      (evt) => {
        evt.preventDefault();
        const email = evt.target.querySelector(`#user-email`).value;
        const password = evt.target.querySelector(`#user-password`).value;
        submitHandler(email, password);
      }
    }>
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  </div> :
    <Redirect to="/"></Redirect>;
};

Login.propTypes = {
  submitHandler: PropTypes.func,
  isAuthorizationRequired: PropTypes.bool
};

export default Login;
