import { useEffect, useState } from "react";
import Get from "../../../lib/http/get";

const Cart = () => {
  const [userCart, setUserCart] = useState([]);
  const user = sessionStorage.getItem("user_id");
  function getCart() {
    const data = Get(`cart-user/${user}`);
    setUserCart(data);
  }

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    console.log(userCart);
  }, [userCart]);
  return <div>Cart</div>;
};

export default Cart;
