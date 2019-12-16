import React from "react";
import {bool, func} from "prop-types";
import Login from "@components/login/login";
import PageFooter from "@components/page-footer/page-footer";
import Logo from "@components/logo/logo";
import {connect} from 'react-redux';
import apiDispatcher from "@reducers/api-dispatcher/api-dispatcher";
import history from "@src/history";

const UserPage = (props) =>{
  if (!props.isAuthorizationRequired) {
    history.goBack();
  }
  return <div className="user-page">
    <header className="page-header user-page__head">
      <Logo/>
      <h1 className="page-title user-page__title">Sign in</h1>
    </header>
    <div className="sign-in user-page__content">
      <Login onSubmit={props.onSubmit} isAuthorizationRequired={props.isAuthorizationRequired}></Login>
    </div>
    <PageFooter/>
  </div>
  ;
};

UserPage.propTypes = {
  onSubmit: func.isRequired,
  isAuthorizationRequired: bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const res = Object.assign({}, ownProps, {
    isAuthorizationRequired: state.user.isAuthorizationRequired,
    auth: state.user.auth
  });
  return res;
};
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (email, password) => dispatch(apiDispatcher.login(email, password)),
});

export {UserPage};
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
