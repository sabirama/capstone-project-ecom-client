/* eslint-disable react/no-unescaped-entities */
import { Segment } from "semantic-ui-react";

const WhatSetsUsApart = () => {
  return (
    <Segment className="container flex-col ">
      <Segment className="container content-center">
        <h1>What Sets Us Apart</h1>
      </Segment>

      <Segment className="container flex-col height-100 px-2">
        <h2 className="mt-1">
          At The Readers Shelf, we understand that every reader is unique. That's why we curate an extensive collection
          of books spanning various genres, from classic literature to contemporary bestsellers, from non-fiction to
          young adult fiction. We take pride in offering a diverse selection of titles to cater to all tastes and
          preferences.
        </h2>
        <h2>
          But what truly sets us apart is our unwavering commitment to customer service. We believe in going the extra
          mile to make your shopping experience exceptional. Our team is dedicated to assisting you in finding the
          perfect book, providing recommendations, and ensuring your orders arrive promptly and in excellent condition.
        </h2>
      </Segment>
    </Segment>
  );
};

export default WhatSetsUsApart;
