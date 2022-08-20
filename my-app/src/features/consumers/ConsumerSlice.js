import { createSlice } from "@reduxjs/toolkit";
import consumers from "../../data/consumers";

const initialState = {
  consumers: consumers,
};

const consumerSlice = createSlice({
  name: "consumer",
  initialState,
  reducers: {},
});

export default consumerSlice.reducer;
//still have to export actions when wanting to use them
