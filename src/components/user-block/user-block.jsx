import React from "react";
import {API_URL} from "../../api";
import {Link} from "react-router-dom";

const UserBlock = (props) => <div className="user-block">
  { props.auth ? <div className="user-block__avatar">
    <Link to={`/mylist`}>
      <img
        src={`${API_URL}/${props.auth.avatarUrl}`}
        alt={props.auth.name}
        width="63"
        height="63"
      /></Link>
  </div> :
    <Link to="/login">Sign in</Link>}
</div>;

export default UserBlock;
