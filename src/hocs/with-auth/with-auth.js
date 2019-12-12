import React, {PureComponent} from 'react';
import UserPage from "../../components/user-page/user-page";

const withAuth = (Component) => {
  class WithAuth extends PureComponent {
    constructor(props) {
      super(props);

    }

    render() {
      return this.state.isAuthorizationRequired ? <UserPage {...this.props}></UserPage>
        : <Component
          {...this.props}
        />;
    }
  }

  WithAuth.propTypes = {};

  return WithAuth;
};

export default withAuth;
