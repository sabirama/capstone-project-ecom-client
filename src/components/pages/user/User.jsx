import { Segment } from "semantic-ui-react";
import { Routes } from "react-router-dom";
import { LinkMapping, RouteMapping } from "../../lib/mapping";
import userRoutes from "../../lib/routes/pageroutes/userroutes";

import "./User.css";

const User = () => {
  return (
    <>
      <Segment className="container">
        <div className="flex">
          <h1>Account Details</h1>
          <ul className="flex"> {LinkMapping(userRoutes, [], "px-1")}</ul>
        </div>
      </Segment>

      <Routes>{RouteMapping(userRoutes, [])}</Routes>
    </>
  );
};

export default User;
