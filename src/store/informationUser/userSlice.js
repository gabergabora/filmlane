import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  information: {
    name: "",
    family: "",
    email: "",
  },
};

export const userSlice = createSlice({
  initialState,
  name: "userData",
  reducers: {
    setUserData: (state, action) => {
      state.information = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
