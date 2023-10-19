import { LinkMapping, RouteMapping } from "../../lib/methods/mapping";
import aboutroutes from "../../lib/routes/pageroutes/aboutroutes";
import { Segment } from "semantic-ui-react";

const About = () => {
  return (
    <>
      <Segment className="container">
        <div className="flex container width-90 px-1">
          <ul className="flex-col">{LinkMapping(aboutroutes, ["ABOUT"], "py-1", "px-1")}</ul>
          <div className="flex content-center width-100">{RouteMapping(aboutroutes, [])}</div>
        </div>
      </Segment>
    </>
  );
};

export default About;
