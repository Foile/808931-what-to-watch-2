import React, {PureComponent} from 'react';
import UserPage from "@components/pages/user-page/user-page";
import {compose} from "redux";
import {connect} from 'react-redux';
import {bool} from "prop-types";

const withAuth = (Component) => {
  class WithAuth extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      const {isAuthorizationRequired} = this.props;
      return isAuthorizationRequired ?
        <UserPage {...this.props} />
        : <Component {...this.props} />;
    }
  }

  WithAuth.propTypes = {isAuthorizationRequired: bool};

  return WithAuth;
};

const mapStateToProps = (state) => ({
  isAuthorizationRequired: state.user.isAuthorizationRequired,
  auth: state.user.auth
});

export {withAuth};
export default compose(
    connect(mapStateToProps),
    withAuth
);
