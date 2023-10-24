import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Get from "../../../../lib/http/get";
import OrderDetails from "./components/OrderDetails";
import { Segment } from "semantic-ui-react";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = sessionStorage.getItem("user_id");

  async function getOrders() {
    const data = await Get(`orders/${user}?page_size=20`);
    setOrderHistory(data.orders);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getOrders();
  }, [user]);

  useEffect(() => {
    setOrders(
      orderHistory.map((order) => {
        if (order.order_details.order_item.length != 0) {
          return {
            order_id: order.id,
            book_title: order.order_details.order_item[0].book[0].title,
            total_price: order.order_details.order_item[0].price_total,
            address: order.order_details.address,
            payment_option: order.order_details.payment_option,
          };
        }
      })
    );
  }, [orderHistory]);

  return (
    <>
      <Segment>
        {loading == false ? (
          <>
            {orders.length != 0 ? (
              <Segment className="container flex-col width-90 m-auto">
                {orders.map((order, index) => {
                  return <OrderDetails key={index} order={order} />;
                })}
              </Segment>
            ) : (
              <>
                <div>No Orders</div>
                <Link to="/books">ADD ITEMS</Link>
              </>
            )}
          </>
        ) : (
          <>
            <img src="/loader.gif" alt="" className="loader" />
          </>
        )}
      </Segment>
    </>
  );
};

export default OrderHistory;
