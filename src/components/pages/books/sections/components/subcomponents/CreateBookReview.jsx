import { Form } from "semantic-ui-react";

import Post from "../../../../../lib/http/post";
import { useEffect, useState } from "react";

const CreateBookReview = (prop) => {
  const [reviewBody, setReviewBody] = useState("");
  const [review, setReview] = useState("");
  const [rate, setRate] = useState(null);
  const userId = sessionStorage.getItem("user_id");

  function bodyChange(e) {
    setReviewBody(e.target.value);
  }

  function createRate(e) {
    setRate(e.target.value);
  }

  async function postReview() {
    await Post("/book-reviews", postData, setReview);
    console.log(review);
  }

  const postData = {
    user_id: userId,
    book_id: prop.bookId,
    body: reviewBody,
    rate: rate,
  };

  function logger() {
    console.log(postData);
  }

  useEffect(() => {
    window.dispatchEvent(new Event("addedBookReview"));
  }, [review]);

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
          Test
        </button>
        <button onClick={logger} className="button">
          CONSOLE LOG
        </button>
      </Form>
    </>
  );
};

export default CreateBookReview;
