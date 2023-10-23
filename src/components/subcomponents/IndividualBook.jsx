/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Segment, Menu } from "semantic-ui-react";
import Get from "../lib/http/get";
import CreateBookReview from "./CreateBookReview";
import BookReviewSection from "./BookReviewSection";

const IndividualBook = (prop) => {
  const [reviews, setReviews] = useState([]);
  function logger() {
    console.log(prop);
  }
  async function getReviews() {
    const data = await Get(`book-reviews/book?book_id=${prop.book.id}`);
    setReviews(data.book_reviews);
  }

  useEffect(() => {
    window.addEventListener("addedBookReview", () => {
      getReviews();
    });
    return () => {
      window.removeEventListener("addedBookReview", () => {});
    };
  }, [prop]);

  return (
    <>
      <button onClick={logger}>TEST</button>
      <Segment className="p-1 container flex-col width-100">
        <img
          src={
            prop.book.book_image == undefined || []
              ? ""
              : import.meta.env.VITE_SOURCE_URL + prop.book.book_image[0].image_path
          }
          alt="book cover"
          className="book-cover"
        />
        <Segment className="py-1 container">
          <div className="width-100">
            <h1>{prop.book.title}</h1>
            <p>Written by: {prop.book.book_details.author[0].pen_name}</p>
          </div>
          <div className="container price place-center">
            <h3 className="width-100">{prop.book.price} Php</h3>
          </div>
        </Segment>
        <Segment className="py-1">
          <h3>Details</h3>
          <p>{prop.book.book_details.body}</p>
        </Segment>
      </Segment>

      <Menu className="flex content-space-between">
        <Menu.Item>
          <button className="button">BUY NOW</button>
        </Menu.Item>

        <Menu.Item>
          <button className="button">ADD TO CART</button>
        </Menu.Item>

        <Segment className="container button-container">
          <button className="button">Add to favorites</button>
        </Segment>
      </Menu>

      <Segment>
        <Segment>
          <h2>Reviews</h2>
        </Segment>

        {reviews.map((bookreviews) => {
          return bookreviews.book_reviews.map((review, index) => {
            return review != null ? (
              <div key={index} className="container py-1">
                <BookReviewSection review={review} user={bookreviews.user} />
              </div>
            ) : null;
          });
        })}
      </Segment>

      <Segment>
        <CreateBookReview bookId={prop.book.id} />
      </Segment>
    </>
  );
};

export default IndividualBook;
