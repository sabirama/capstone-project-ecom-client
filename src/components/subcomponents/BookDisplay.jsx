import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";

const BookDisplay = (prop) => {
  const [book, setBook] = useState([]);
  const [path, setPath] = useState("");
  useEffect(() => {
    setBook(prop.book);
    setPath(prop.book.book_image[0].image_path);
  }, [prop.book]);
  return (
    <>
      {book != [] ? (
        <>
          <Grid.Column className="container book">
            <Link to={`id/${book.id}`} className="container book-link width-90 height-90">
              <img src={import.meta.env.VITE_SOURCE_URL + path} alt="book image" className="book-image" />
              <h1>{book.title}</h1>
              <p>for: {book.price} Php</p>
            </Link>
          </Grid.Column>
        </>
      ) : (
        <> no display</>
      )}
    </>
  );
};

export default BookDisplay;
