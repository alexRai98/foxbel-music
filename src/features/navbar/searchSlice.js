import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSounds } from "../../services/search";

export const fetchSounds = createAsyncThunk(
  "sounds/fetchSounds",
  async (param) => {
    const response = await getSounds(param);
    return response;
  }
);

export const soundSlice = createSlice({
  name: "search",
  initialState: {
    sounds: [],
    status: "idle",
    error: null,
  },
  reducers: {
  },
  extraReducers: {
    [fetchSounds.pending]: (state) => {
      state.status = "loading";
    },
    [fetchSounds.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.sounds = action.payload;
    },
    [fetchSounds.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});


export default soundSlice.reducer;