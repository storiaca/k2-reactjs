import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    myUser: {},
  },
  reducers: {
    loggedUserAction: (state, action) => {
      console.log(action.payload);
      // {user: blabla, token: 'dasd8hasd'}
      state.myUser = action.payload;
    },
  },
});

export const { loggedUserAction } = userSlice.actions;
export default userSlice.reducer;
