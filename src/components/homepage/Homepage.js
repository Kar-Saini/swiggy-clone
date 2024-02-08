import React from "react";
import Cuisines from "./cuisines/Cuisines";
import Restaurants from "./restaurants/Restaurants";
import TopRestaurants from "./restaurants/TopRestaurants";

export default function Homepage() {
  return (
    <div className="">
      <Cuisines />
      <TopRestaurants />
      <Restaurants />
    </div>
  );
}
