import { configureStore } from "@reduxjs/toolkit";
import databaseReducer from "../features/part/partSlice";

export default configureStore({
  reducer: {
    part: databaseReducer,
  },
});
