import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Segment } from "semantic-ui-react";

const BuyNowModal = (prop) => {
  const [paymentType, setPaymentType] = useState("COD");
  const [bookPrice, setBookPrice] = useState(0);
  const navigate = useNavigate();

  function buyNow() {
    try {
      navigate("/");
    } catch (error) {
      //
    }
  }

  return (
    <div className="modal flex place-center">
      <Segment className="container place-center">
        <div className="container flex-col modal-box">
          <Segment>
            <h4>BUY NOW</h4>
          </Segment>
          <Segment>
            <h4>Payment Options</h4>
            <div>
              <span className="mx-1">
                <input type="radio" value={"COD"} name="payment-type" onClick={(e) => setPaymentType(e.target.value)} />
                <small>Cash on Delivery</small>
              </span>
              <span className="mx-1">
                <input
                  type="radio"
                  value={"Credit Card"}
                  name="payment-type"
                  onClick={(e) => setPaymentType(e.target.value)}
                />
                <small>Credit Card</small>
              </span>
              <span className="mx-1">
                <input
                  type="radio"
                  value={"G-Cash"}
                  name="payment-type"
                  onClick={(e) => setPaymentType(e.target.value)}
                />
                <small>G-Cash</small>
              </span>
            </div>

            {paymentType == "Credit Card" ? (
              <>
                <Segment>
                  <div className="container flex-col place-center">
                    <input type={"number"} placeholder="card Number" maxLength={20} className="card-input" />
                    <input type={"letter"} placeholder="Card Holder Namme" className="card-input" />
                    <div>
                      <input type={"number"} placeholder="CVV" maxLength={3} className="short m-1" />
                      <input type="number" className="short" />
                      /
                      <input type="number" className="short" />
                    </div>
                  </div>
                </Segment>
              </>
            ) : (
              <></>
            )}
            {paymentType == "COD" ? (
              <>
                <Segment className="container place-center">
                  <div className="width-100 flex-col">
                    <input type="text" placeholder="Full Name" className="cod-input" />
                    <textarea placeholder="Other Details" className="cod-input" />
                  </div>
                  <div className="container flex-col mx-1">
                    <input type="text" placeholder="street" className="cod-input" />
                    <input type="text" placeholder="city" className="cod-input" />
                    <input type="text" placeholder="province" className="cod-input" />
                  </div>
                </Segment>
              </>
            ) : (
              <></>
            )}

            {paymentType == "G-Cash" ? (
              <>
                <Segment className="container place-center">
                  <div className="container flex-col mx-1">
                    <input type="text" placeholder="G-Cash Number" className="cod-input" />
                    <textarea placeholder="Other Details" className="cod-input" />
                  </div>
                </Segment>
              </>
            ) : (
              <></>
            )}
          </Segment>

          <Segment>
            <div className="my-1">
              <h5>Quantity</h5>
            </div>
            <div className="flex place-center">
              <input type="number" value={bookPrice} onChange={(e) => setBookPrice(e.target.value)} className="short" />
              <p className="mx-1">Total: {Number(sessionStorage.getItem("current_price")) * bookPrice} Php</p>
            </div>
          </Segment>
          <Segment className="container flex-end">
            <button to="/" className="mx-1 proceed-button" onClick={buyNow}>
              PROCEED
            </button>
            <button onClick={prop.setter} className="cancel-button">
              CANCEL
            </button>
          </Segment>
        </div>
      </Segment>
    </div>
  );
};

export default BuyNowModal;
