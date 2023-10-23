/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Segment, Container, Menu } from "semantic-ui-react";
import CreateBookReview from "../CreateBookReview";
import BookReviewSection from "../BookReviewSection";
import Get from "../../lib/http/get";
import BuyNowModal from "./component-parts/BuyNowModal";

const IndividualBook = (prop) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState(0.0);
  const [reviews, setReviews] = useState([]);
  const [path, setPath] = useState("");
  const [buyNow, setBuyNow] = useState(false);

  async function getReviews() {
    const data = await Get(`book-reviews/book?book_id=${prop.book.id}`);
    setReviews(data.book_reviews);
  }

  function toggleBuy() {
    setBuyNow(!buyNow);
    scrollTo(top);
  }

  useEffect(() => {
    getReviews();
  }, []);

  useEffect(() => {
    if (prop.book != []) {
      setTitle(prop.book.title);
      setAuthor(prop.book.book_details.author[0].pen_name);
      setPrice(prop.book.price);
      setDetail(prop.book.book_details.body);
      if (prop.book.book_image.length != 0) {
        setPath(import.meta.env.VITE_SOURCE_URL + prop.book.book_image[0].image_path);
      }
    }

    window.addEventListener("addedBookReview", () => {
      getReviews();
    });
    return () => {
      window.removeEventListener("addedBookReview", () => {});
    };
  }, [prop]);

  return (
    <>
      <>
        {buyNow == false ? (
          <>
            <Segment className="p-1 container flex-col width-100">
              <img src={path} alt="book cover" className="book-cover" />
              <Container className="py-1 container flex">
                <div className="width-100">
                  <h1 className="text-center">{title}</h1>
                  <p>Written by: {author}</p>
                </div>
                <div className="container price place-center">
                  <h3 className="width-100">{price} Php</h3>
                </div>
              </Container>
              <Segment className="py-1">
                <h3>Details</h3>
                <p>{detail}</p>
              </Segment>
            </Segment>
            <Menu className="flex content-space-between">
              <Menu.Item>
                <button onClick={toggleBuy}>BUY NOW</button>
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
        ) : (
          <>
            <BuyNowModal setter={toggleBuy} />
          </>
        )}
      </>
    </>
  );
};

export default IndividualBook;
