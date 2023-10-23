import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";

const BookDisplay = (prop) => {
  const [book, setBook] = useState([]);
  const [path, setPath] = useState("");

  function toTop() {
    scrollTo(top);
  }

  useEffect(() => {
    setBook(prop.book);
    if (prop.book.book_image[0] != null) {
      setPath(import.meta.env.VITE_SOURCE_URL + prop.book.book_image[0].image_path);
    }
  }, [prop.book]);

  return (
    <>
      {book != [] ? (
        <>
          <Grid.Column className="container book">
            <Link to={`/books/id/${book.id}`} className="container book-link width-90 height-90" onClick={toTop}>
              <img src={path} alt="book image" className="book-image" />
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
