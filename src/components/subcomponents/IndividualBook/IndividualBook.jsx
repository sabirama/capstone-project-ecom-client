/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Segment, Container, Menu } from "semantic-ui-react";
import CreateBookReview from "../CreateBookReview";
import BookReviewSection from "../BookReviewSection";
import Get from "../../lib/http/get";
import BuyNowModal from "./component-parts/BuyNowModal";
import AddToCart from "./component-parts/AddToCart";

const IndividualBook = () => {
  const [changeDisplay, setChangeDisplay] = useState(false);
  const [title, setTitle] = useState(sessionStorage.getItem("current_title"));
  const [author, setAuthor] = useState(sessionStorage.getItem("current_author"));
  const [detail, setDetail] = useState(sessionStorage.getItem("current_detail"));
  const [price, setPrice] = useState(sessionStorage.getItem("current_price"));
  const [reviews, setReviews] = useState([]);
  const [path, setPath] = useState("");
  const [genre, setGenre] = useState("");
  const [buyNow, setBuyNow] = useState(false);
  const [cartItem, setCartItem] = useState(false);
  const bookId = sessionStorage.getItem("current_id");

  function setItems() {
    setChangeDisplay(!changeDisplay);
  }

  useEffect(() => {
    window.addEventListener("displayBook", function () {
      setItems();
    });

    return () => {
      window.removeEventListener("dispayBook", function () {});
    };
  }, [changeDisplay]);

  useEffect(() => {
    setTitle(sessionStorage.getItem("current_title"));
    setAuthor(sessionStorage.getItem("current_author"));
    setDetail(sessionStorage.getItem("current_detail"));
    setPrice(sessionStorage.getItem("current_price"));
    setPath(sessionStorage.getItem("current_image"));
    setGenre(sessionStorage.getItem("current_genre"));
    getReviews();
  }, [changeDisplay]);

  async function getReviews() {
    const data = await Get(`book-reviews/book?book_id=${bookId}`);
    setReviews(data.book_reviews);
  }

  function toggleBuy() {
    setBuyNow(!buyNow);
    scrollTo(top);
  }

  function toggleCart() {
    setCartItem(!cartItem);
  }

  useEffect(() => {}, [reviews]);

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
                  <p>Author: {author}</p>
                </div>
                <div className="container price place-center">
                  <h3 className="width-100">{price} Php</h3>
                </div>
              </Container>
              <Segment className="py-1">
                <h3>Details</h3>
                <p>{detail}</p>
                <p>genre: {genre}</p>
              </Segment>
            </Segment>
            <Menu className="flex content-space-between">
              <Menu.Item>
                <button onClick={toggleBuy}>BUY NOW</button>
              </Menu.Item>

              <Menu.Item>
                <button onClick={toggleCart}>ADD TO CART</button>
              </Menu.Item>

              <Segment className="container button-container">
                <button className="button">Add to favorites</button>
              </Segment>
            </Menu>
            <Segment>
              {reviews.length != 0 ? (
                <>
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
                </>
              ) : (
                <>
                  <img src="/loader.gif" alt="" className="loader" />
                </>
              )}
            </Segment>
            <Segment>
              <CreateBookReview bookId={bookId} />
            </Segment>
          </>
        ) : (
          <BuyNowModal setter={toggleBuy} />
        )}
        {cartItem == false ? <></> : <AddToCart setter={toggleCart} />}
      </>
    </>
  );
};

export default IndividualBook;
