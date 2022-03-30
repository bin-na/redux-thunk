import { configureStore } from "@reduxjs/toolkit";

import inforReducer from "../reducers/inforSlice";

export default configureStore({
  reducer: {
    infor: inforReducer,
  },
});
