import { createSlice } from "@reduxjs/toolkit";
import trains from "../../data/trains";
import {
  produceWaterFromTrainToTank,
  supplyWaterFromTankToTrain,
} from "../tanks/tankSlice";

const initialState = {
  trains: trains,
};

const trainSlice = createSlice({
  name: "train",
  initialState,
  reducers: {
    switchRegenCurrentTankId: (state, action) => {
      state.trains = state.trains.map((trainInfo) => {
        // [...state.tanks, action.payload]
        if (action.payload.trainId === trainInfo.trainId) {
          return {
            ...trainInfo,
            currentTankId: action.payload.currentTankId,
          };
        }
        return {
          ...trainInfo,
        };
      });
    },
    resetTrainAfterRegen: (state, action) => {
      state.trains = state.trains.map((trainInfo) => {
        if (action.payload.trainId === trainInfo.trainId) {
          return {
            ...trainInfo,
            trainRunLength: action.payload.trainRunLength,
            regenTime: action.payload.regenTime,
          };
        }
        return trainInfo;
      });
    },
    switchOutputCurrentTankId: (state, action) => {
      state.trains = state.trains.map((trainInfo) => {
        if (action.payload.trainId === trainInfo.trainId) {
          return {
            ...trainInfo,
            currentTankId: action.payload.currentTankId,
          };
        }
        return {
          ...trainInfo,
        };
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(produceWaterFromTrainToTank, (state, action) => {
        state.trains = state.trains.map((trainInfo) => {
          if (
            action.payload.trainId === trainInfo.trainId &&
            trainInfo.trainRunLength > 0
          ) {
            const updatedTrainRunLength = trainInfo.trainRunLength - 1;
            return {
              ...trainInfo,
              trainRunLength: updatedTrainRunLength,
            };
          }
          return trainInfo;
        });
      })
      .addCase(supplyWaterFromTankToTrain, (state, action) => {
        state.trains = state.trains.map((trainInfo) => {
          if (
            action.payload.trainId === trainInfo.trainId &&
            action.payload.regenTime > 0 &&
            action.payload.trainRunLength === 0
          ) {
            const updatedregenTime = trainInfo.regenTime - 1;
            return {
              ...trainInfo,
              regenTime: updatedregenTime,
            };
          }
          return trainInfo;
        });
      });
  },
});

export default trainSlice.reducer;
export const {
  resetTrainAfterRegen,
  switchOutputCurrentTankId,
  switchRegenCurrentTankId,
} = trainSlice.actions;
