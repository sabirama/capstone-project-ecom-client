import { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";

const BookReviewSection = (prop) => {
  const [user, setUser] = useState(prop.user[0]);
  const [review, setReview] = useState(prop.review[0]);

  useEffect(() => {}, [prop]);

  useEffect(() => {
    setUser(prop.user[0]);
    setReview(prop.review[0]);
  }, []);

  return (
    <Segment>
      <div>
        <h3>
          {user.first_name} {user.last_name}
        </h3>
        <p>{review.body}</p>
      </div>
    </Segment>
  );
};

export default BookReviewSection;
