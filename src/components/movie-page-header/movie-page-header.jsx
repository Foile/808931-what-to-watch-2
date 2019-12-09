import React from "react";
import {shape, string} from "prop-types";
import {Link} from "react-router-dom";
import {API_URL} from "../../api";
import Logo from "../logo/logo";

const MovieHeader = (props) => {
  const {auth} = props;
  return <header className="page-header movie-card__head">
    <Logo/>

    <div className="user-block">
      { auth ? <div className="user-block__avatar">
        <img
          src={`${API_URL}/${auth.avatarUrl}`}
          alt={auth.name}
          width="63"
          height="63"
        />
      </div> :
        <Link to="/login">Sign in</Link>}
    </div>
  </header>;
};

MovieHeader.propTypes = {auth: shape({
  name: string,
  avatarUrl: string
})};

export default MovieHeader;
