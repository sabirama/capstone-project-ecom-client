import { Grid, Segment } from "semantic-ui-react";
import BookDisplay from "../../home/components/subcomponents/BookDisplay";

const BookPages = (prop) => {
  return (
    <>
      <Segment>
        <Grid stackable columns={4}>
          <Grid.Row className="book-row">
            {prop.books.map((book, index) => {
              return <BookDisplay key={index} book={book} />;
            })}
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default BookPages;
