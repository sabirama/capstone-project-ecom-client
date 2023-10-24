import { useState } from "react";
import Post from "../../../lib/http/post";

const AddToCart = (prop) => {
  const [quantity, setQuantity] = useState(0);
  const book = sessionStorage.getItem("current_book");
  const cartId = sessionStorage.getItem("cart_id");
  const price = sessionStorage.getItem("current_price");

  const PostData = {
    book_Id: book,
    cart_id: cartId,
    quantity: quantity,
    price_total: quantity * price,
  };

  function changeQuantity(e) {
    setQuantity(e.target.value);
  }

  //adding items to cart
  async function addToCart() {
    prop.setter();
    console.log(PostData);
    await Post(`/order-items`, PostData);
  }

  return (
    <div className="modal">
      <div className="cart-item flex-col">
        <div className="modal-text flex-col">
          <p>Add Item to Cart?</p>
          <span>
            <input type="number" className="short" value={quantity} onChange={changeQuantity} />
            Quantity
          </span>
        </div>
        <div className="flex flex-end cart-buttons">
          <button className="button" onClick={addToCart}>
            YES
          </button>
          <button className="button" onClick={prop.setter}>
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
