import { createSlice } from "@reduxjs/toolkit";

//will import data here

const initialState = {
  distributor: [],
};

const distributorSlice = createSlice({
  name: "distributor",
  initialState,
  reducers: {},
});

export default distributorSlice.reducer;
