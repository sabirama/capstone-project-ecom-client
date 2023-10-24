import { useEffect, useState } from "react";
import { Segment, Container } from "semantic-ui-react";
import Get from "../../../../lib/http/get";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = sessionStorage.getItem("cart_id");

  async function getCart() {
    const data = await Get(`cart-user/${user}`);
    setCart(data);
  }

  async function getItems() {
    const data = await Get(`order-items:user/${cart.id}`);
    setItems(data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getCart();
  }, []);

  useEffect(() => {
    getItems();
  }, [cart]);

  return (
    <>
      {loading == false ? (
        <>
          {items.order_items != null ? (
            <>
              <Segment className="container flex-col">
                {items.order_items.map((item, index) => {
                  return (
                    <Segment key={index} className="container flex content-space-between">
                      <Link to={`/id/${item.book[0].id}`} className="width-100">
                        {item.book[0].title}
                      </Link>
                      <Container className="flex flex-end width-70">
                        <h5 className="px-1">Quantity: </h5>
                        <h5>{item.quantity}</h5>
                      </Container>
                      <Container className="flex flex-end width-70">
                        <h5>Total:</h5>
                        <h5>{item.price_total} Php</h5>
                      </Container>
                      <Container className="flex-end width-70">
                        <button className="fix-height-40">remove</button>
                      </Container>
                    </Segment>
                  );
                })}
              </Segment>

              <Segment className="flex flex-end">
                <button>Proceed to Check-Out</button>
              </Segment>
            </>
          ) : (
            <>No Items</>
          )}
        </>
      ) : (
        <Segment>
          <img src="/loader.gif" alt="" className="loader" />
        </Segment>
      )}
    </>
  );
};

export default Cart;
