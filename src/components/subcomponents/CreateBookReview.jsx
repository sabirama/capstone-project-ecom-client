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
    if (sessionStorage.getItem("user_id") == null) {
      //
    }
    await Post("/book-reviews", postData);
    window.dispatchEvent(new Event("addedBookReview"));
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
        <div>
          <input type="radio" value={1} name="rating" onClick={createRate} />
          <input type="radio" value={2} name="rating" onClick={createRate} />
          <input type="radio" value={3} name="rating" onClick={createRate} />
          <input type="radio" value={4} name="rating" onClick={createRate} />
          <input type="radio" value={5} name="rating" onClick={createRate} />
        </div>
        <button onClick={postReview} className="button">
          Post Review
        </button>
      </Form>
    </>
  );
};

export default CreateBookReview;
