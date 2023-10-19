import { Segment } from "semantic-ui-react";
import { LinkMapping, RouteMapping } from "../../lib/methods/mapping";
import userRoutes from "../../lib/routes/pageroutes/userroutes";

const User = () => {
  return (
    <Segment className="container">
      <div className="flex">
        <h1>USER</h1>
        <ul className="flex"> {LinkMapping(userRoutes, [], "px-1")}</ul>
      </div>
      {RouteMapping(userRoutes, [])}
    </Segment>
  );
};

export default User;
