import { Container, Segment } from "semantic-ui-react";
import Post from "../lib/http/post";

const BookReviewSection = (prop) => {
  const user = sessionStorage.getItem("user_id");

  async function deleteReview() {
    await Post(`book-reviews/${prop.review.id}`);
    window.dispatchEvent(new Event("updateReview"));
  }

  console.log(prop.review);
  return (
    <>
      {prop.reviews != undefined ? (
        <>
          {prop.reviews.map((review, index) => {
            return (
              <Segment key={index} className="container flex-col">
                <Container>
                  <h5>{review.user[0].username}</h5>
                  <p className="mx-1">{review.book_reviews.body}</p>
                </Container>
                {user == review.user[0].id ? (
                  <>
                    <Container>
                      <button onClick={deleteReview}>x</button>
                    </Container>
                  </>
                ) : (
                  <></>
                )}
              </Segment>
            );
          })}
        </>
      ) : (
        <Segment>
          <img src="/loader.gif" alt="" className="loader" />
        </Segment>
      )}
    </>
  );
};

export default BookReviewSection;
