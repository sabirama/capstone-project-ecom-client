import { LinkMapping, RouteMapping } from "../../lib/methods/mapping";
import aboutroutes from "../../lib/routes/pageroutes/aboutroutes";
import { Segment } from "semantic-ui-react";

import "./About.css";

const About = () => {
  return (
    <>
      <Segment className="container about">
        <div className="flex container width-90 px-1">
          <ul className="flex-col flex-start">{LinkMapping(aboutroutes, ["ABOUT"], "py-1", "px-1")}</ul>
          <div className="flex content-center width-100 fix-height-800 box-primary">
            {RouteMapping(aboutroutes, [])}
          </div>
        </div>
      </Segment>
    </>
  );
};

export default About;
