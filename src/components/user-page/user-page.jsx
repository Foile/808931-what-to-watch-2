
import React from "react";
import PropTypes from "prop-types";
import Login from "../login/login";
import PageFooter from "../page-footer/page-footer";

const UserPage = (props) =>
  <div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      <h1 className="page-title user-page__title">Sign in</h1>
    </header>
    <div className="sign-in user-page__content">
      <Login submitHandler={props.submitHandler} isAuthorizationRequired={props.isAuthorizationRequired}></Login>
    </div>
    <PageFooter/>
  </div>;

UserPage.propTypes = {submitHandler: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired
};

export default UserPage;
