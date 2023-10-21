import { useEffect, useState } from "react";
import Get from "../../../lib/http/get";
import { Segment } from "semantic-ui-react";

const OrderHistory = () => {
  const [orderHistory, setOrderHistorys] = useState([]);
  const user = sessionStorage.getItem("user_id");
  function getOrders() {
    Get(`orders/${1}`).then((response) => {
      setOrderHistorys(response.data.orders);
    });
  }

  useEffect(() => {
    console.log(orderHistory[0]);
  }, [orderHistory]);
  return (
    <>
      <Segment>
        <h3></h3>
      </Segment>
      <button onClick={getOrders}></button>
    </>
  );
};

export default OrderHistory;
