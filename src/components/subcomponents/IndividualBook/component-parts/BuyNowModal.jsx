import { useState } from "react";
import { Segment } from "semantic-ui-react";

const BuyNowModal = (prop) => {
  const [paymentType, setPaymentType] = useState("COD");

  function changePaymentType(e) {
    setPaymentType(e.target.value);
    console.log(paymentType);
  }
  return (
    <div className="modal flex place-center">
      <Segment className="container place-center">
        <div className="container flex-col modal-box">
          <Segment>
            <h4>Payment Options</h4>
          </Segment>
          <Segment>
            <h4>Payment Options</h4>
            <div>
              <span className="mx-1">
                <input type="radio" value={"COD"} name="payment-type" onClick={changePaymentType} />
                <small>Cash on Delivery</small>
              </span>
              <span className="mx-1">
                <input type="radio" value={"Credit Card"} name="payment-type" onClick={changePaymentType} />
                <small>Credit Card</small>
              </span>
              <span className="mx-1">
                <input type="radio" value={"G-Cash"} name="payment-type" onClick={changePaymentType} />
                <small>G-Cash</small>
              </span>
            </div>
          </Segment>

          {paymentType == "Credit Card" ? (
            <>
              <Segment>
                <div className="container flex-col">
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
              <Segment className="container">
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
              <Segment className="container">
                <div className="container flex-col mx-1">
                  <input type="text" placeholder="G-Cash Number" className="cod-input" />
                  <textarea placeholder="Other Details" className="cod-input" />
                </div>
              </Segment>
            </>
          ) : (
            <></>
          )}

          <Segment className="container flex-end">
            <button className="mx-1">PROCEED</button>
            <button onClick={prop.setter}>CANCEL</button>
          </Segment>
        </div>
      </Segment>
    </div>
  );
};

export default BuyNowModal;
