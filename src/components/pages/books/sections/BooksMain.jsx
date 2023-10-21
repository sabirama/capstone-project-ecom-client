import { Grid, Segment } from "semantic-ui-react";
import Book from "../components/book";

const BooksMain = (prop) => {
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
      <Segment>
        <Grid stackable columns={4}>
          <Grid.Row className="book-row">
            {prop.books.map((book, index) => {
              return <Book key={index} book={book} />;
            })}
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default BooksMain;
