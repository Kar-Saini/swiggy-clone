import React from "react";
import { SWIGGY_ICON } from "../../utils/constants/constants";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";

export default function Header() {
  return (
    <div className=" sticky py-2 bg-slate-100 shadow-md flex justify-between ">
      <div className="w-[95%] flex m-1">
        <div className="w-[50%] mx-4">
          <img className="h-[50px]" src={SWIGGY_ICON} alt="" />
        </div>
        <div className="flex w-[50%] justify-between my-3 font-semibold text-md">
          <div className="flex hover:cursor-pointer hover:text-orange-500 ">
            <IoSearch className="my-1 mx-2 text-lg" />
            Search
          </div>
          <div className="flex hover:cursor-pointer hover:text-orange-500 ">
            <BiSolidOffer className="my-1 mx-2 text-xl" />
            Offers
          </div>
          <div className="flex hover:cursor-pointer hover:text-orange-500 ">
            <IoHelpBuoyOutline className="my-1 mx-2 text-xl" />
            Help
          </div>
          <div className="flex hover:cursor-pointer hover:text-orange-500 ">
            <FaUser className="my-1 mx-2 text-lg" />
            Sign in
          </div>
          <div className="flex hover:cursor-pointer hover:text-orange-500 ">
            <MdOutlineShoppingCart className="my-1 mx-2 text-xl" />
            Cart
          </div>
        </div>
      </div>
    </div>
  );
}
