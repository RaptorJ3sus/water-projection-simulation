import React from "react";
import Grid from "@mui/material/Grid";
import { storageWaterTransferToDistribution } from "./distributionTankSlice";

const DistributionTank = ({
  tankId,
  tankLevelPercentage,
  tankLevelMetric,
  tankCapacity,
  tankLevelMetricCarryOver,
  distributeWater,
}) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={2}>
        <button onClick={() => distributeWater()}>
          Distribute Water To Tank {tankId}
        </button>
      </Grid>
      <Grid item xs={2}>
        Tank Number - {tankId}
      </Grid>
      <Grid item xs={3}>
        Current Tank Level Percentage- {tankLevelPercentage}
      </Grid>
      <Grid item xs={2}>
        Current Tank Level Metric- {tankLevelMetric}
      </Grid>
      <Grid item xs={2}>
        Tank Carry Over - {tankLevelMetricCarryOver}
      </Grid>
    </Grid>
  );
};

export default DistributionTank;
