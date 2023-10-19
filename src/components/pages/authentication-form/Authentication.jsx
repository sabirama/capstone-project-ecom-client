import { RouteMapping } from "../../lib/methods/mapping";
import authroute from "../../lib/routes/pageroutes/authroute";

import "./Authentication.css";

const Authentication = () => {
  return <div className="mt-5">{RouteMapping(authroute, [])}</div>;
};

export default Authentication;
