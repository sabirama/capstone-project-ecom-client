import { useEffect, useState } from "react";
import Get from "../../../lib/http/get";
import OrderDetails from "./components/OrderDetails";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [orders, setOrders] = useState([]);

  const user = sessionStorage.getItem("user_id");

  async function getOrders() {
    const data = await Get(`orders/${user}`);
    setOrderHistory(data.orders);
  }

  useEffect(() => {
    getOrders();
  }, [user]);

  useEffect(() => {
    console.log(orderHistory);
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
    console.log(orders);
  }, [orderHistory]);

  return (
    <>
      <div className="container flex-col width-90 m-auto">
        {orders.map((order, index) => {
          return <OrderDetails key={index} order={order} />;
        })}
      </div>
    </>
  );
};

export default OrderHistory;
