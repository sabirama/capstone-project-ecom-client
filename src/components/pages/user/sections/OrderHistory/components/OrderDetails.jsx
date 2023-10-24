import { Link } from "react-router-dom";
import { Segment } from "semantic-ui-react";

const OrderDetails = (prop) => {
  return (
    <>
      {prop.order == undefined ? (
        <></>
      ) : (
        <>
          <Segment className="container flex-col">
            <small>Order Id: {prop.order.order_id}</small>
            <Link to={`/books/id/${prop.order_id}`}>{prop.order.book_title}</Link>
            <Segment className="container content-space-between">
              <p>Total Price: {prop.order.total_price}</p>
              <p>
                Address: {prop.order.address.street}, {prop.order.address.city},{prop.order.address.province}
              </p>
              <p>Payment Type : {prop.order.payment_option == null ? <>COD</> : <>{prop.order.payment_option}</>}</p>
            </Segment>
          </Segment>
        </>
      )}
    </>
  );
};

export default OrderDetails;
