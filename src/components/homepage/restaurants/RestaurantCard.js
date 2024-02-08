import React from "react";
import { SWIGGY_IMG } from "../../../utils/constants/constants";

export default function RestaurantCard({
  title,
  img,
  rating,
  cuisines,
  area,
  time,
}) {
  return (
    <div className=" rounded-lg mx-2 my-4 hover:scale-95 hover:cursor-pointer transition-transform">
      <img
        src={SWIGGY_IMG + img}
        alt=""
        className="w-[260px] h-[150px] rounded-xl"
      />
      <div className="p-1">
        <div className="font-semibold">
          {title.length > 32 ? title.substring(0, 32) + "..." : title}
        </div>
        <div className="font-semibold">
          <span>{}</span>
          <span>⭐{rating} • </span>
          <span>{time}</span>
        </div>
        <div>{cuisines.slice(0, 3).join(", ")}</div>
        <div>{area}</div>
      </div>
    </div>
  );
}
