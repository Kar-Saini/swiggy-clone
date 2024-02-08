import { configureStore } from "@reduxjs/toolkit";
import swiggyDataSliceReducer from "../slice/swiggyDataSlice";

const appStore = configureStore({
  reducer: {
    swiggyData: swiggyDataSliceReducer,
  },
});
export default appStore;
