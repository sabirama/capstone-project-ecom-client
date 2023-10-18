import { RouteMapping } from "../../lib/methods/mapping";
import authroute from "../../lib/routes/pageroutes/authroute";

import "./Authentication.css";

const Authentication = () => {
  return <>{RouteMapping(authroute, [])}</>;
};

export default Authentication;
