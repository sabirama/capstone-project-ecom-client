import Post from "../../../../../lib/http/post";

const OrderReview = (prop) => {
  const postData = {
    user_id: sessionStorage.getItem("user_id"),
    order_id: prop.order.id,
  };

  function postReview() {
    Post("/order-reviews", postData);
  }
  return <div>OrderReview</div>;
};

export default OrderReview;
