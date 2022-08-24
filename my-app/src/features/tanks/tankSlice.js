import { createSlice } from "@reduxjs/toolkit";
import tanks from "../../data/tank";

const initialState = {
  tanks: tanks,
};
const tankSlice = createSlice({
  name: "tank",
  initialState,
  reducers: {
    userInputTanks: (state, action) => {
      return { tanks: [...state.tanks, action.payload] };
    },
    resetTankAfterRegenCarryOver: (state, action) => {
      state.tanks = state.tanks.map((tankInfo) => {
        if (action.payload.tankId === tankInfo.tankId) {
          return {
            ...tankInfo,
            tankId: action.payload.tankId,
            tankLevelMetric: action.payload.tankLevelMetric,
            tankLevelPercentage: action.payload.tankLevelPercentage,
            tankLevelMetricCarryOver: action.payload.tankLevelMetricCarryOver,
          };
        }
        return tankInfo;
      });
    },
    carryOverRegenWater: (state, action) => {
      state.tanks = state.tanks.map((tankInfo) => {
        if (action.payload.tankId === tankInfo.tankId) {
          return {
            ...tankInfo,
            tankId: action.payload.tankId,
            tankLevelMetric: action.payload.tankLevelMetric,
            tankLevelPercentage: action.payload.tankLevelPercentage,
          };
        }
        return tankInfo;
      });
    },
    resetTankAfterCarryOver: (state, action) => {
      state.tanks = state.tanks.map((tankInfo) => {
        if (action.payload.tankId === tankInfo.tankId) {
          return {
            ...tankInfo,
            tankId: action.payload.tankId,
            tankLevelMetric: action.payload.tankLevelMetric,
            tankLevelPercentage: action.payload.tankLevelPercentage,
            tankLevelMetricCarryOver: action.payload.tankLevelMetricCarryOver,
          };
        }
        return tankInfo;
      });
    },
    carryOverProductionWater: (state, action) => {
      state.tanks = state.tanks.map((tankInfo) => {
        if (action.payload.tankId === tankInfo.tankId) {
          return {
            ...tankInfo,
            tankId: action.payload.tankId,
            tankLevelMetric: action.payload.tankLevelMetric,
            tankLevelPercentage: action.payload.tankLevelPercentage,
            tankLevelMetricCarryOver: action.payload.tankLevelMetricCarryOver,
          };
        }
        return tankInfo;
      });
    },
    produceWaterFromTrainToTank: (state, action) => {
      state.tanks = state.tanks.map((tankInfo) => {
        if (action.payload.tankId === tankInfo.tankId) {
          return {
            ...tankInfo,
            tankLevelMetric: action.payload.tankLevelMetric,
            tankLevelPercentage: action.payload.tankLevelPercentage,
            tankLevelMetricCarryOver: action.payload.tankLevelMetricCarryOver,
          };
        }
        return tankInfo;
      });
    },
    supplyWaterFromTankToTrain: (state, action) => {
      state.tanks = state.tanks.map((tankInfo) => {
        if (action.payload.tankId === tankInfo.tankId) {
          return {
            ...tankInfo,
            tankLevelMetric: action.payload.tankLevelMetric,
            tankLevelPercentage: action.payload.tankLevelPercentage,
            tankLevelMetricCarryOver: action.payload.tankLevelMetricCarryOver,
          };
        }
        return tankInfo;
      });
    },
  },
});

export default tankSlice.reducer;
export const {
  produceWaterFromTrainToTank,
  supplyWaterFromTankToTrain,
  carryOverProductionWater,
  resetTankAfterCarryOver,
  carryOverRegenWater,
  resetTankAfterRegenCarryOver,
  userInputTanks,
} = tankSlice.actions;
