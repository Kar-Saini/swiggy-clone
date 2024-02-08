import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useSelector } from "react-redux";

export default function TopRestaurants() {
  const topResturantsData = useSelector(
    (store) => store.swiggyData.topRestaurants
  );
  console.log(topResturantsData);

  return (
    <div className="mx-auto w-[75vw]  border-b-2 my-4 ">
      <div className="font-bold text-2xl">Top restaurant chains in Pune</div>
      <div className="flex flex-wrap m-4">
        {topResturantsData.map((ele) => (
          <RestaurantCard
            key={ele.info.id}
            title={ele.info.name}
            img={ele.info.cloudinaryImageId}
            rating={ele.info.avgRating}
            cuisines={ele.info.cuisines}
            area={ele.info.areaName}
            price={ele.info.costForTwo}
            time={ele.info.sla.slaString}
          />
        ))}
      </div>
    </div>
  );
}
