import { Segment } from "semantic-ui-react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { RouteMapping } from "../../lib/methods/mapping";
import Get from "../../lib/http/get";
import IndividualBook from "./sections/IndividualBook";
import "./Books.css";
import BooksGrid from "./sections/BooksGrid";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [pageLinks, setPageLinks] = useState([]);

  //get books from server
  async function getBooks() {
    const { data } = await Get("books?page_size=20");
    setPageLinks(data.meta.links);
    setBooks(data.data);
  }

  const bookRoutes = books.map((book) => {
    return {
      path: book.title,
      element: <IndividualBook book={book} />,
    };
  });

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    console.log(books);
    console.log(pageLinks);
  }, [books]);

  return (
    <div>
      <Segment className="container">
        <div className="container flex">
          <h1>Books</h1>
          <div className="px-1 check-group">
            <div className="ml-2">
              <input type="radio" name="display-by" />
              <label className="ml-1">by Name</label>
            </div>
            <div className="ml-2">
              <input type="radio" name="display-by" />
              <label className="ml-1">by Latest</label>
            </div>
            <div className="ml-2">
              <input type="radio" name="display-by" />
              <label className="ml-1">by Author</label>
            </div>
            <div className="ml-2">
              <input type="radio" name="display-by" />
              <label className="ml-1">by Genre</label>
            </div>
          </div>
        </div>
      </Segment>

      <Segment>
        <Routes>
          <Route path="" element={<BooksGrid books={books} />} />
        </Routes>
        {RouteMapping(bookRoutes, [])}
      </Segment>
    </div>
  );
};

export default Books;
