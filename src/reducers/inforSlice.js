import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const inforSlice = createSlice({
  name: "infor",
  initialState,
  reducers: {
    saveInfor(state, action) {
      console.log(action.payload);
      state = { ...action.payload };
      console.log(state);
    },
  },
});

export const { saveInfor } = inforSlice.actions;
export default inforSlice.reducer;
