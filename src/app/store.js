import {configureStore} from "@reduxjs/toolkit";
import dolarReducer from "../features/dolar/dolarSlice";

export const store = configureStore({
  reducer: {
    dolar: dolarReducer,
  },
});
