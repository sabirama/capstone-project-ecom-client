import { Segment, Menu } from "semantic-ui-react";

const IndividualBook = (prop) => {
  return (
    <>
      <Segment className="container">
        <span className="py-1">
          <h1> TITLE</h1>
          <h2>{prop.book.title}</h2>
        </span>
        <span className="py-1">
          <h2>Details</h2>
          <p>{prop.book.title}</p>
        </span>
      </Segment>
      <Segment></Segment>
      <Segment>
        <Menu className="flex content-space-between">
          <Menu.Item>BUY NOW</Menu.Item>
          <Menu.Item>ADD TO CART</Menu.Item>
        </Menu>
      </Segment>
    </>
  );
};

export default IndividualBook;
