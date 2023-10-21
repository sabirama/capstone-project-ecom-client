import { Segment } from "semantic-ui-react";

const BookReviewSection = (prop) => {
  return (
    <Segment>
      <div>
        <h3>{prop.review.user_id}</h3>
        <p>{prop.review.body}</p>
      </div>
    </Segment>
  );
};

export default BookReviewSection;
