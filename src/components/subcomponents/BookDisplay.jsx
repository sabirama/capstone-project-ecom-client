import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";

const BookDisplay = (prop) => {
  const [book, setBook] = useState([]);
  const [genres, setGenres] = useState("");
  const [path, setPath] = useState("");

  function onClickHandler() {
    window.dispatchEvent(new Event("displayBook"));
    sessionStorage.setItem("current_book", book.id);
    sessionStorage.setItem("current_title", book.title);
    sessionStorage.setItem("current_detail", book.book_details.body);
    sessionStorage.setItem("current_price", book.price);
    sessionStorage.setItem("current_author", book.book_details.author[0].pen_name);
    sessionStorage.setItem("current_image", path);
    sessionStorage.setItem("current_genre", genres);

    scrollTo(top);
  }

  useEffect(() => {
    setBook(prop.book);
    if (prop.book.book_image[0] != null) {
      setPath(import.meta.env.VITE_SOURCE_URL + prop.book.book_image[0].image_path);
    }
    if (prop.book.book_details.genres[0] != null) {
      setGenres(prop.book.book_details.genres[0].name);
    }
  }, [prop.book]);

  return (
    <>
      {book != [] ? (
        <>
          <Grid.Column className="container book">
            <Link
              to={`/books/id/${book.id}`}
              className="container book-link width-90 height-90"
              onClick={onClickHandler}
            >
              <img src={path} alt="book image" className="book-image" />
              <h1>{book.title}</h1>
              <p>for: {book.price} Php</p>
              <p>genre: {genres}</p>
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
