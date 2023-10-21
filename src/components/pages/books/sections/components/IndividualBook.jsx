import { useEffect, useState } from "react";
import { Segment, Menu } from "semantic-ui-react";
import BookReviewSection from "./subcomponents/BookReviewSection";
import Get from "../../../../lib/http/get";
import CreateReview from "./subcomponents/CreateReview";

const IndividualBook = (prop) => {
  const [reviews, setReviews] = useState([]);

  async function getReviews() {
    const { data } = await Get(`book-reviews/user?user_id=13`);
    setReviews(data.book_reviews.data);
  }
  useEffect(() => {
    getReviews();
  }, []);

  useEffect(() => {
    console.log(reviews);
  }, [reviews]);

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
      <Segment>
        <Menu className="flex content-space-between">
          <Menu.Item>BUY NOW</Menu.Item>
          <Menu.Item>ADD TO CART</Menu.Item>
        </Menu>
      </Segment>

      <Segment>
        {reviews.map((review, index) => {
          return <BookReviewSection key={index} review={review} />;
        })}
      </Segment>

      <Segment>
        <CreateReview />
      </Segment>
    </>
  );
};

export default IndividualBook;
