/* eslint-disable react/no-unescaped-entities */
import { Segment } from "semantic-ui-react";
const AboutMain = () => {
  return (
    <Segment className="container flex-col">
      <Segment className="container flex-col overflow-y-auto">
        <Segment className="container content-center">
          <h1>About</h1>
        </Segment>
        <h2>
          Welcome to The Readers Shelf! Here, we are passionate about books. Our mission is to provide book lovers with
          an online haven where they can explore, discover, and immerse themselves in the wonderful world of literature.
          We believe that books have the power to inspire, educate, and entertain, and we're here to help you find your
          next literary adventure.
        </h2>
      </Segment>

      <Segment className="container flex-col">
        <Segment className="container content-center">
          <h2>Our Values</h2>
        </Segment>
        <ul>
          <li className="my-1">
            <strong>Diversity and Inclusion:</strong> We value diversity in literature and actively seek out authors and
            stories from various backgrounds, ensuring that everyone can find books that resonate with them.
          </li>

          <li className="my-1">
            <strong>Quality:</strong> We are committed to providing only high-quality books, including carefully
            selected editions and pristine copies.
          </li>

          <li className="my-1">
            <strong>Customer Satisfaction:</strong> Your satisfaction is our top priority. We're here to assist you in
            any way we can, from answering questions to resolving issues.
          </li>

          <li className="my-1">
            <strong>Community:</strong> We believe in fostering a community of readers. Follow us on social media, join
            our book clubs, and connect with fellow book enthusiasts.
          </li>
        </ul>
      </Segment>
    </Segment>
  );
};

export default AboutMain;
