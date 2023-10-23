import { Routes } from "react-router-dom";
import { RouteMapping } from "../../subcomponents/mapping";
import authroute from "../../lib/routes/pageroutes/authroute";

import "./Authentication.css";

const Authentication = () => {
  return (
    <div className="mt-5">
      <Routes>{RouteMapping(authroute, [])}</Routes>
    </div>
  );
};

export default Authentication;
