import { Form } from "semantic-ui-react";

import Post from "../lib/http/post";
import { useState } from "react";

const CreateBookReview = (prop) => {
  const [reviewBody, setReviewBody] = useState("");
  const [rate, setRate] = useState(null);
  const userId = sessionStorage.getItem("user_id");

  function bodyChange(e) {
    setReviewBody(e.target.value);
  }

  function createRate(e) {
    setRate(e.target.value);
  }

  async function postReview() {
    await Post("/book-reviews", postData);
    window.dispatchEvent(new Event("displayBook"));
  }

  const postData = {
    user_id: userId,
    book_id: prop.bookId,
    body: reviewBody,
    rate: rate,
  };

  return (
    <>
      <Form className="container flex-col">
        <textarea className="width-100 flex" placeholder="Tell us more" value={reviewBody} onChange={bodyChange} />
        <div className="flex  my-1 flex-end">
          <div>
            <input type="radio" id="star1" value={0} name="rating" onClick={createRate} className="star-radio" />
            <label htmlFor="star1" className="s"></label>
          </div>
          <div>
            <input type="radio" id="star2" value={1} name="rating" onClick={createRate} className="star-radio" />
            <label htmlFor="star2" className="star-label"></label>
          </div>
          <div>
            <input type="radio" id="star3" value={2} name="rating" onClick={createRate} className="star-radio" />
            <label htmlFor="star3" className="star-label"></label>
          </div>
          <div>
            <input type="radio" id="star4" value={3} name="rating" onClick={createRate} className="star-radio" />
            <label htmlFor="star4" className="star-label"></label>
          </div>
          <div>
            <input type="radio" id="star5" value={4} name="rating" onClick={createRate} className="star-radio" />
            <label htmlFor="star5" className="star-label"></label>
          </div>
          <div>
            <input type="radio" id="star6" value={5} name="rating" onClick={createRate} className="star-radio" />
            <label htmlFor="star6" className="star-label"></label>
          </div>
          <button onClick={postReview} className="button post-review-button">
            Post Review
          </button>
        </div>
      </Form>
    </>
  );
};

export default CreateBookReview;
