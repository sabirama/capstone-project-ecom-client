import { Segment } from "semantic-ui-react";
import Post from "../lib/http/post";

const BookReviewSection = (prop) => {
  const user = sessionStorage.getItem("user_id");

  async function deleteReview() {
    if (user == prop.user[0].id) {
      await Post(`book-reviews/${prop.review.id}`);
    }
    
  }

  return (
    <Segment>
      <div>
        <h3>{prop.user[0].username}</h3>
        <p>{prop.review.body}</p>
        <button onClick={deleteReview}>remove</button>
      </div>
    </Segment>
  );
};

export default BookReviewSection;
