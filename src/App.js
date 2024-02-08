import React from "react";
import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";
import useSwiggyApiData from "./utils/customHooks/useSwiggyApiData";

export default function App() {
  useSwiggyApiData();
  return (
    <div>
      <Header />
      <Homepage />
    </div>
  );
}
