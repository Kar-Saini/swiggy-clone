import React from "react";
import { useSelector } from "react-redux";
import { SWIGGY_IMG } from "../../../utils/constants/constants";
import ShimmerCuisines from "./ShimmerCuisines";

export default function Cuisines() {
  const cuisineData = useSelector((store) => store.swiggyData.cuisineDetails);
  console.log(cuisineData);
  if (cuisineData.length === 0) {
    return <ShimmerCuisines />;
  }
  return (
    <div className=" mx-auto w-[75vw] m-3 p-1 border-b-2 border-spacing-y-2">
      <h1 className="font-bold text-3xl">What's on your mind?</h1>
      <div className="flex overflow-x-scroll scrollbar-hide m-1">
        {cuisineData.map((ele) => (
          <img
            className="w-[150px] mx-2"
            key={ele.id}
            src={SWIGGY_IMG + ele.imageId}
            alt={ele.accessibility.altText}
          />
        ))}
      </div>
    </div>
  );
}
