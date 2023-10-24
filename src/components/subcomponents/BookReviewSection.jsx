import { Container, Segment } from "semantic-ui-react";
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
      {prop.review != undefined ? (
        <></>
      ) : (
        <Segment>
          <img src="/loader.gif" alt="" className="loader" />
        </Segment>
      )}
    </>
  );
};

export default BookReviewSection;
