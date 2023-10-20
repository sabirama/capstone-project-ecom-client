import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";

const book = (prop) => {
  return (
    <>
      <Grid.Column className="container book">
        <Link to={prop.book.title} className="container book-link width-90 height-90">
          <img src={prop.book_image} alt="book image" className="book-image" />
          <h1>{prop.book.title}</h1>
          <p>for: {prop.book.price} Php</p>
        </Link>
      </Grid.Column>
    </>
  );
};

export default book;
