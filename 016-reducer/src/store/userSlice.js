import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    saveUser: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default userSlice;
