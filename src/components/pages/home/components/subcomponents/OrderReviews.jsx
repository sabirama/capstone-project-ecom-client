import { Segment } from "semantic-ui-react";

/* eslint-disable react/prop-types */
const OrderReviews = (props) => {
  return (
    <Segment>
      <div>
        <h5>Customer {props.review.user_id}</h5>
      </div>
      <div>
        <p>{props.review.body}</p>
        <span></span>
      </div>
    </Segment>
  );
};

export default OrderReviews;
