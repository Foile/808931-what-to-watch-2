import React, {PureComponent} from 'react';
import UserPage from "../../components/user-page/user-page";
import {compose} from "redux";
import {connect} from 'react-redux';

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

  WithAuth.propTypes = {};

  return WithAuth;
};

const mapStateToProps = (state) => ({
  isAuthorizationRequired: state.user.isAuthorizationRequired,
  auth: state.user.auth
});
export default compose(
  connect(mapStateToProps),
  withAuth
);
