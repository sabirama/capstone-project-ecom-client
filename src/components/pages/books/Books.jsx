/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import { RouteMapping } from "../../subcomponents/mapping";
import Get from "../../lib/http/get";
import BookPages from "./sections/BookPages";
import Pagination from "../../subcomponents/pagination";
import IndividualBook from "../../subcomponents/IndividualBook";

import "./Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [pages, setPages] = useState([]);
  const [pageValue, setPageValue] = useState(1);

  //get books from server
  async function getBooks() {
    const data = await Get(`books?page_size=10&page=${pageValue}`);
    if (data.data) {
      setBooks(data.data);
      setPages(data.meta.links);
    } else {
      setBooks([]);
    }
  }

  const bookRoutes = books.map((book) => {
    return {
      path: `id/${book.id}`,
      element: <IndividualBook book={book} />,
    };
  });

  useEffect(() => {
    getBooks();
  }, [pageValue]);

  return (
    <>
      {books != [] ? (
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
        </>
      ) : (
        <>Oops! we are experiencing some errors with our server.</>
      )}
      <div>
        <>
          {books != [] ? (
            <>
              <Routes>{RouteMapping(bookRoutes, [])}</Routes>
              <Routes>
                <Route path="*" element={<BookPages books={books} />} />
              </Routes>
            </>
          ) : (
            <>PROBLEM LOADNG BOOKS </>
          )}
        </>
      </div>
      <Segment>{books != [] ? <>{Pagination(pages, "books", setPageValue)}</> : <>no links found</>}</Segment>
    </>
  );
};

export default Books;
