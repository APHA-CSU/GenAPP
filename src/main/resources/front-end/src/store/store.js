import { configureStore } from "@reduxjs/toolkit";
import securitySlice from "../features/securitySlice";

export default configureStore({
  reducer: {
    security: securitySlice,
  },
});
