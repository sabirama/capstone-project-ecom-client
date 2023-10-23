import { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import Get from "../../../lib/http/get";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const user = sessionStorage.getItem("user_id");

  async function getCart() {
    const data = await Get(`cart-user/${user}`);
    setCart(data);
  }

  async function getItems() {
    const data = await Get(`order-items:user/${cart.id}`);
    setItems(data);
  }

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    getItems();
  }, [cart]);


  return (
    <>

      {items.order_items != null ? (
        <>
          <Segment className="container">
            {items.order_items.map((item, index) => {
              return (
                <Segment key={index} className="container flex content-space-between">
                  <Link to={`/id/${item.book[0].id}`}>{item.book[0].title}</Link>
                  <h5>Quantity: {item.quantity}</h5>
                  <h5>Total:{item.price_total} Php</h5>
                </Segment>
              );
            })}
          </Segment>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Cart;
