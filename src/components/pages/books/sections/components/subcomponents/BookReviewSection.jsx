import { Segment } from "semantic-ui-react";

const BookReviewSection = (prop) => {
  return (
    <Segment>
      <div>
        <h3>
          {prop.user[0].first_name} {prop.user[0].last_name}
        </h3>
        <p>{prop.review[0].body}</p>
      </div>
    </Segment>
  );
};

export default BookReviewSection;
