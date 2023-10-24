import { Segment } from "semantic-ui-react";
import Post from "../lib/http/post";

const BookReviewSection = (prop) => {
  const user = sessionStorage.getItem("user_id");

  async function deleteReview() {
    await Post(`book-reviews/${prop.review.id}`);
    window.dispatchEvent(new Event("updateReview"));
  }

  return (
    <>
      {console.log(prop.review)}
      {
        <Segment>
          <div>
            <h5>{prop.review.user[0].username}</h5>
            <p>{prop.review.book_reviews.body}</p>
          </div>
          <div>
            {user == prop.review.user[0].id ? (
              <>
                <button onClick={deleteReview}>x</button>
              </>
            ) : (
              <></>
            )}
          </div>
        </Segment>
      }
    </>
  );
};

export default BookReviewSection;
