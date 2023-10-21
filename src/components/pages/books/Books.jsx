import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import Get from "../../lib/http/get";
import BookPages from "./sections/BookPages";
import Pagination from "../../lib/methods/pagination";
import IndividualBook from "./sections/components/IndividualBook";

import "./Books.css";
import { RouteMapping } from "../../lib/methods/mapping";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [pages, setPages] = useState([]);
  const [pageValue, setPageValue] = useState(1);

  //get books from server
  async function getBooks() {
    const { data } = await Get(`books?page_size=20&page=${pageValue}`);
    setBooks(data.data);
    setPages(data.meta.links);
  }

  const bookRoutes = books.map((book) => {
    return {
      path: `${book.title}`,
      element: <IndividualBook book={book} />,
    };
  });

  useEffect(() => {
    getBooks();
    console.log(Number(pageValue) + 1);
  }, [pageValue]);

  return (
    <>
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
      <div>
        <>
          {RouteMapping(bookRoutes, [])}
          <Routes>
            <Route path="*" element={<BookPages books={books} />} />
          </Routes>
        </>
      </div>
      <Segment>{Pagination(pages, "books", setPageValue)}</Segment>
    </>
  );
};

export default Books;
