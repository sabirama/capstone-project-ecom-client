/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Book from "../../books/components/Book";
import OrderReviews from "./subcomponents/OrderReviews";

const MainPage = (props) => {
  return (
    <>
      <Segment className="container">
        <img src="logo.svg" className="hero-img" />
        <div className="container box-accent flex-col place-center width-70">
          <h3>Literature's Finest Selection Awaits You!</h3>
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
            return <Book key={index} book={book} />;
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
