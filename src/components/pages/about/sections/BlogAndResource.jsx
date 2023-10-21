/* eslint-disable react/no-unescaped-entities */
import { Segment } from "semantic-ui-react";

const BlogAndResource = () => {
  return (
    <Segment className="container flex-col">
      <Segment className="container content-center">
        <h1>Blogs and Resources</h1>
      </Segment>

      <Segment className="container px-2">
        <h2>
          Visit our blog for book reviews, reading lists, author interviews, and literary discussions. We're more than
          just a store; we're a hub for all things book-related.
        </h2>
      </Segment>
    </Segment>
  );
};

export default BlogAndResource;
