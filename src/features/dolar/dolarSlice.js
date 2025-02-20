import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDolares = createAsyncThunk("dolar/fetchDolares", async () => {
  const response = await axios.get("https://dolarapi.com/v1/dolares");
  return response.data;
});

const dolarSlice = createSlice({
  name: "dolar",
  initialState: {
    dolares: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDolares.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDolares.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dolares = action.payload;
      })
      .addCase(fetchDolares.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Error fetching data";
      });
  },
});

export default dolarSlice.reducer;
