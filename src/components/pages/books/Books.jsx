import { Segment } from "semantic-ui-react";
import { useEffect, useState } from "react";

import Book from "./components/book";
import Get from "../../lib/http/get";
import "./Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [pageLinks, setPageLinks] = useState([]);

  //get books from server
  async function getBooks() {
    const { data } = await Get("books?page_size=20");
    setPageLinks(data.meta.links);
    setBooks(data.data);
  }

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
        {books.map((book, index) => {
          return <Book key={index} book={book} />;
        })}
      </Segment>
    </div>
  );
};

export default Books;
