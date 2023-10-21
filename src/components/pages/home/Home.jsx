/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { RouteMapping } from "../../lib/methods/mapping";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import request from "../../lib/http/request";
import IndividualBook from "../books/sections/components/IndividualBook";
import "./Home.css";

const Home = () => {
  const [latest, setLatest] = useState([]);
  const [reviews, setReviews] = useState([]);

  async function getLatest() {
    const { data } = await request.get("books:latest?page_size=10");
    setLatest(data.books);
  }

  async function getReviews() {
    const { data } = await request.get("order-reviews?page_size=10");
    setReviews(data.order_review.data);
  }

  const latestRoutes = latest.map((book) => {
    return {
      name: book.title,
      path: `id/${book.id}`,
      element: <IndividualBook book={book} />,
    };
  });

  useEffect(() => {
    getLatest();
    getReviews();
  }, []);

  useEffect(() => {
    console.log(reviews);
  }, [reviews]);

  return (
    <>
      {RouteMapping(latestRoutes, [])}

      <Routes>
        <Route path="/" element={<MainPage latest={latest} reviews={reviews} />} />
      </Routes>
    </>
  );
};

export default Home;
