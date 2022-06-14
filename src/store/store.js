import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./informationUser/userSlice";

export const store = configureStore({
  reducer: {user: userSlice },
});
