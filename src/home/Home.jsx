import React from "react";
import Banner from "../components/Banner";
import BestSellerBooks from "./BestSellBooks";
import FavBook from "./FavBook";
import OtherBooks from "./OtherBooks";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellerBooks />
      <FavBook />
      <OtherBooks />
      <Review />
    </div>
  );
};

export default Home;
