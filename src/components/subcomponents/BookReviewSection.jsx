import { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";

const BookReviewSection = (prop) => {
  const [user, setUser] = useState(prop.user);
  const [review, setReview] = useState(prop.review);

  useEffect(() => {
    setUser(prop.user);
    setReview(prop.review);
    console.log(prop.user);
  }, [prop]);

  return (
    <Segment>
      <div>
        <h3>{user[0].username}</h3>
        <p>{review.body}</p>
      </div>
    </Segment>
  );
};

export default BookReviewSection;
