import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";

const BookDisplay = (prop) => {
  return (
    <>
      <Grid.Column className="container book">
        <Link to={`id/${prop.book.id}`} className="container book-link width-90 height-90">
          <img
            src={prop.book.book_image[0] ? import.meta.env.VITE_SOURCE_URL + prop.book.book_image[0].image_path : ""}
            alt="book image"
            className="book-image"
          />
          <h1>{prop.book.title}</h1>
          <p>for: {prop.book.price} Php</p>
        </Link>
      </Grid.Column>
    </>
  );
};

export default BookDisplay;
