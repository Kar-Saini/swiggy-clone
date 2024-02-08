import { useEffect } from "react";
import { SWIGGY_API } from "../constants/constants";
import { useDispatch } from "react-redux";
import { addCuisineDetails, addTopRestaurants } from "../slice/swiggyDataSlice";

export default function useSwiggyApiData() {
  const dispatch = useDispatch();
  async function getSwiggyData() {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    const cuisineData =
      jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
    const topRestaurantsData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    dispatch(addCuisineDetails(cuisineData));
    dispatch(addTopRestaurants(topRestaurantsData));
  }
  useEffect(() => {
    getSwiggyData();
  }, []);
}
