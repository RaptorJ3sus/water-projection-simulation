import { createSlice } from "@reduxjs/toolkit";
import distributionTanks from "../../data/distributionTanks";

const initialState = {
  distributionTanks: distributionTanks,
};

const distributionTankSlice = createSlice({
  name: "distributionTank",
  initialState,
  reducers: {
    storageWaterTransferToDistribution: (state, action) => {
      state.distributionTanks = state.distributionTanks.map(
        (distributionTankInfo) => {
          if (
            action.payload.tankLevelMetric >
              distributionTankInfo.tankCapacity -
                distributionTankInfo.tankLevelMetric &&
            distributionTankInfo.tankLevelMetric <
              distributionTankInfo.tankCapacity
          ) {
            const updatedTankLevelMetric =
              distributionTankInfo.tankLevelMetric +
              (distributionTankInfo.tankCapacity -
                distributionTankInfo.tankLevelMetric);
            const updatedTankLevelMetricCarryOver =
              action.payload.tankLevelMetric -
              (distributionTankInfo.tankCapacity -
                distributionTankInfo.tankLevelMetric);
            return {
              ...distributionTankInfo,
              tankLevelMetric: updatedTankLevelMetric,
              tankLevelMetricCarryOver: updatedTankLevelMetricCarryOver,
            };
          }
          if (
            action.payload.tankLevelMetric <
              distributionTankInfo.tankCapacity -
                distributionTankInfo.tankLevelMetric &&
            distributionTankInfo.tankLevelMetric <
              distributionTankInfo.tankCapacity
          ) {
            const updatedTankLevelMetric =
              distributionTankInfo.tankLevelMetric +
              action.payload.tankLevelMetric;
            return {
              ...distributionTankInfo,
              tankLevelMetric: updatedTankLevelMetric,
            };
          }
          return distributionTankInfo;
        }
      );
    },
  },
});

export default distributionTankSlice.reducer;
export const { storageWaterTransferToDistribution } =
  distributionTankSlice.actions;
