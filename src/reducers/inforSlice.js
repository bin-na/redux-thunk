import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const inforSlice = createSlice({
  name: "infor",
  initialState,
  reducers: {
    saveInfor: (state, action) => action.payload,
  },
});

export const { saveInfor } = inforSlice.actions;
export default inforSlice.reducer;
