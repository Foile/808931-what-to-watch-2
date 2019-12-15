import React from "react";
import {string, func} from "prop-types";
import history from "../../history";
import withErrorFormUser from "../../hocs/with-error-form-user/with-error-form-user";

const Login = (props) => {
  const {submitHandler, error, onChange} = props;
  return <div className="sign-in user-page__content">
    <form action="#" className="sign-in__form" onSubmit={
      (evt) => {
        evt.preventDefault();
        const email = evt.target.querySelector(`#user-email`).value;
        const password = evt.target.querySelector(`#user-password`).value;
        if (!error) {
          submitHandler(email, password);
          history.goBack();
        }
      }
    }>
      {error && <div className="sign-in__message">
        <p>{error}</p>
      </div>}
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input onChange={onChange} className={`sign-in__input ${error && `sign-in__input--error`}`} type="email" placeholder="Email address" name="user-email" id="user-email" />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input onChange={onChange} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  </div>;
};

Login.propTypes = {
  error: string,
  submitHandler: func,
  onChange: func
};

export default withErrorFormUser(Login);
