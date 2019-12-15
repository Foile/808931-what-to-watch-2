
import React from "react";
import {bool, func} from "prop-types";
import Login from "../../login/login";
import PageFooter from "../../page-footer/page-footer";
import Logo from "../../logo/logo";
import {connect} from 'react-redux';
import apiDispatcher from "../../../reducers/api-dispatcher/api-dispatcher";

const UserPage = (props) =>
  <div className="user-page">
    <header className="page-header user-page__head">
      <Logo/>
      <h1 className="page-title user-page__title">Sign in</h1>
    </header>
    <div className="sign-in user-page__content">
      <Login submitHandler={props.submitHandler} isAuthorizationRequired={props.isAuthorizationRequired}></Login>
    </div>
    <PageFooter/>
  </div>;

UserPage.propTypes = {
  submitHandler: func.isRequired,
  isAuthorizationRequired: bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const res = Object.assign({}, ownProps, {
    isAuthorizationRequired: state.user.isAuthorizationRequired,
    auth: state.user.auth,
  });
  return res;
};
const mapDispatchToProps = (dispatch) => ({
  submitHandler: (email, password) => dispatch(apiDispatcher.login(email, password)),
});

export {UserPage};
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
