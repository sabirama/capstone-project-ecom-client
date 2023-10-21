import { Form } from "semantic-ui-react";

import Post from "../../../../../lib/http/post";
import { useEffect, useState } from "react";

const CreateReview = (prop) => {
  const [reviewData, setReviewData] = useState("");
  const userId = sessionStorage.getItem("user_id");

  async function postReview() {
    const { data } = await Post("/order-reviews");
    setReviewData(data);
  }

  useEffect(() => {
    console.log(reviewData);
  }, [reviewData]);

  return (
    <>
      <Form className="container flex-col">
        <textarea className="width-100 flex" placeholder="Tell us more" />
        <button onClick={postReview} className="button">
          Test
        </button>
      </Form>
    </>
  );
};

export default CreateReview;
