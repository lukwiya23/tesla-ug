import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../slices/carSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
