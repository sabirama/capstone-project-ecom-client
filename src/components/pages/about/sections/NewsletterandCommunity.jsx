import { Segment } from "semantic-ui-react";

const NewsletterandCommunity = () => {
  return (
    <Segment className="container flex-col">
      <Segment className="container content-center">
        <h1>Newsletter and Community</h1>
      </Segment>

      <Segment className="container ">
        <h2>
          Subscribe to our newsletter to stay updated on the latest releases, special offers, and literary news. Join
          our community of readers on social media and be part of the conversation about the books you love.
        </h2>
      </Segment>
      <Segment className="container flex-end">
        <button>SUBSCRIBE</button>
      </Segment>
    </Segment>
  );
};

export default NewsletterandCommunity;
