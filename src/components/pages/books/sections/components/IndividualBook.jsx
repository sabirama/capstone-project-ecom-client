import { useEffect, useState } from "react";
import { Segment, Menu } from "semantic-ui-react";
import BookReviewSection from "./subcomponents/BookReviewSection";
import Get from "../../../../lib/http/get";
import CreateReview from "./subcomponents/CreateBookReview";

const IndividualBook = (prop) => {
  const [reviews, setReviews] = useState([]);

  async function getReviews() {
    const { data } = await Get(`book-reviews/book?book_id=${prop.book.id}`);
    setReviews(data.book_reviews);
  }

  useEffect(() => {
    window.addEventListener("newState", () => {
      getReviews();
    });
    return window.removeEventListener("newState", console.log("removed event"));
  }, [prop]);

  return (
    <>
      <Segment className="p-1 container width-100">
        <div className="py-1">
          <h1> TITLE</h1>
          <h2>{prop.book.title}</h2>
        </div>
        <div className="py-1">
          <h2>Details</h2>
          <p>{prop.book.title}</p>
        </div>
      </Segment>

      <Menu className="flex content-space-between">
        <Menu.Item>
          <button className="button">BUY NOW</button>
        </Menu.Item>

        <Menu.Item>
          <button className="button">ADD TO CART</button>
        </Menu.Item>

        <Segment className="container button-container">
          <button className="button">Rate</button>
          <button className="button">Add to favorites</button>
        </Segment>
      </Menu>

      <Segment>
        <Segment>
          <h2>Reviews</h2>
        </Segment>

        {reviews.map((review, index) => {
          return (
            <div key={index} className="container py-1">
              <BookReviewSection review={review.book_reviews} user={review.user} />
            </div>
          );
        })}
      </Segment>

      <Segment>
        <CreateReview bookId={prop.book.id} />
      </Segment>
    </>
  );
};

export default IndividualBook;
