/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import BookDisplay from "../../../subcomponents/BookDisplay";
import OrderReviews from "../../../subcomponents/OrderReviews";

const MainPage = (props) => {
  return (
    <>
      <Segment className="container">
        <img src="logo.svg" className="hero-img" />
        <div className="container flex-col place-center width-70 action-container">
          <h1>Literature's Finest Selection Awaits You!</h1>
          <h4>Browse through our collection.</h4>
          <Link to="books" className="hero-button">
            Explore Our Collection
          </Link>
        </div>
      </Segment>

      <Segment className="container flex-col overflow-x-auto">
        <h3>Latest Books</h3>
        <div className="container">
          {props.latest.map((book, index) => {
            return <BookDisplay key={index} book={book} />;
          })}
        </div>
      </Segment>

      <Segment className="container flex-col py-1">
        <h3>Customer Reviews</h3>
        <div className="container flex-col">
          {props.reviews.map((review, index) => {
            return <OrderReviews key={index} review={review} />;
          })}
        </div>
      </Segment>
    </>
  );
};

export default MainPage;
