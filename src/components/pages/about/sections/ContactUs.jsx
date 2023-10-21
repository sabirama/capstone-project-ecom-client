/* eslint-disable react/no-unescaped-entities */
import { Segment } from "semantic-ui-react";

const ContactUs = () => {
  return (
    <Segment className="container flex-col">
      <Segment className="container content-center">
        <h1>Contact Us</h1>
      </Segment>

      <Segment className="container flex-col">
        <h2>
          We love hearing from our customers and fellow book lovers. Whether you have a question, need a book
          recommendation, or just want to chat about your latest literary discovery, feel free to contact us.
        </h2>
        <h2>
          You can reach us through samplemail@gmail.com. Thank you for visiting "The Readers Shelf", and we look forward
          to being your go-to source for all your reading needs. Happy reading!
        </h2>
        <h3>John Doe Founder, The Readers Shelf</h3>
      </Segment>
    </Segment>
  );
};

export default ContactUs;
