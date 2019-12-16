import React from "react";
import Logo from "@components/logo/logo";
import PageFooter from "@components/page-footer/page-footer";

const NotFound = () => <React.Fragment>
  <div className="user-page">
    <Logo/>
    <h1>404</h1>
    <h2>Page not found.</h2>
    <PageFooter/>
  </div>
</React.Fragment>;

export default NotFound;
