/* eslint-disable react/no-unescaped-entities */
import { Segment } from "semantic-ui-react";

const AboutUs = () => {
  return (
    <Segment className="container flex-col">
      <Segment className="container content-center">
        <h1>About Us</h1>
      </Segment>

      <Segment className="container flex-col px-2">
        <h2>Welcome to The Readers Shelf!</h2>
        <h2>
          We are passionate about books. Our mission is to provide book lovers with an online haven where they can
          explore, discover, and immerse themselves in the wonderful world of literature. We believe that books have the
          power to inspire, educate, and entertain, and we're here to help you find your next literary adventure.
        </h2>
      </Segment>
    </Segment>
  );
};

export default AboutUs;
