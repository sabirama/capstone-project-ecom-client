import { Grid, Segment } from "semantic-ui-react";
import Book from "../components/Book";

const BooksGrid = (prop) => {
  return (
    <Segment>
      <Grid stackable columns={5} divided>
        <Grid.Row className="book-row">
          {prop.books.map((book, index) => {
            return <Book key={index} book={book} />;
          })}
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default BooksGrid;
