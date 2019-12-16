import React from "react";
import {string, func} from "prop-types";
import withErrorFormUser from "@hocs/with-error-form-user/with-error-form-user";
import {connect} from "react-redux";
import ActionCreator from "@reducers/action-creator/action-creator";

const Login = (props) => {
  const {onFormSubmit, error, onChange, serverError} = props;
  const errorText = serverError || error;
  return <div className="sign-in user-page__content">
    <form action="#"
      className="sign-in__form"
      onSubmit={
        (evt) => {
          evt.preventDefault();
          const email = evt.target.querySelector(`#user-email`).value;
          const password = evt.target.querySelector(`#user-password`).value;
          if (!error) {
            onFormSubmit(email, password);
          }
        }
      }>
      {(errorText) && <div className="sign-in__message">
        <p>{errorText}</p>
      </div>}
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input onChange={onChange}
            className={`sign-in__input ${errorText && `sign-in__input--error`}`}
            type="email"
            placeholder="Email address"
            name="user-email"
            id="user-email" />
          <label
            className="sign-in__label visually-hidden"
            htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input onChange={onChange}
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="user-password"
            id="user-password" />
          <label
            className="sign-in__label visually-hidden"
            htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button
          className="sign-in__btn"
          type="submit">Sign in</button>
      </div>
    </form>
  </div>;
};

Login.propTypes = {
  error: string,
  onSubmit: func,
  onChange: func,
  onFormSubmit: func,
  serverError: string
};

const mapStateToProps = (state, ownProps) => {
  const res = Object.assign({}, ownProps, {
    serverError: state.user.error
  });
  return res;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onFormSubmit: (email, password) => {
    ownProps.onSubmit(email, password);
    dispatch(ActionCreator.pushErrorOff());
  }
});

export {Login};
export default withErrorFormUser(connect(mapStateToProps, mapDispatchToProps)(Login));
