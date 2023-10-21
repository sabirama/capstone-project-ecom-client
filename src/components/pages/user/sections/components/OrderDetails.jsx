import { Segment } from "semantic-ui-react";

const OrderDetails = (prop) => {
  return (
    <>
      {prop.order == undefined ? (
        <></>
      ) : (
        <>
          <Segment>
            <Segment className="container flex-col">
              <small>Order Id: {prop.order.order_id}</small>
              <h1>Book: {prop.order.book_title}</h1>
            </Segment>
            <Segment className="container content-space-between">
              <p>Total Price: {prop.order.price_total}</p>
              <p>
                Address: {prop.order.address.street}, {prop.order.address.city},{prop.order.address.province}
              </p>
              <p>Payment Option: {prop.order.payment_option}</p>
            </Segment>
          </Segment>
        </>
      )}
    </>
  );
};

export default OrderDetails;
