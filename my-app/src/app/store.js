import { configureStore } from "@reduxjs/toolkit";
import trainReducer from "../features/trains/trainSlice";
import tankReducer from "../features/tanks/tankSlice";
//import distributionTankReducer from "../features/distributionTanks/distributionTankSlice";
import consumerReducer from "../features/consumers/ConsumerSlice";

const store = configureStore({
  reducer: {
    train: trainReducer,
    tank: tankReducer,
    consumer: consumerReducer,
  },
});

export default store;
