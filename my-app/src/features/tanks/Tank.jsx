import React from "react";
import Grid from "@mui/material/Grid";

const tank = ({
  tankId,
  tankLevelPercentage,
  tankLevelMetric,
  tankCapacity,
  tankLevelMetricCarryOver,
}) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={2}>
        Tank Number - {tankId}
      </Grid>
      <Grid item xs={2}>
        Tank Percentage- {tankLevelPercentage}
      </Grid>
      <Grid item xs={2}>
        Tank Level Metric- {tankLevelMetric}
      </Grid>
      <Grid item xs={2}>
        Tank Capacity - {tankCapacity}
      </Grid>
      <Grid item xs={2}>
        Tank Carry Over - {tankLevelMetricCarryOver}
      </Grid>
    </Grid>
  );
};

export default tank;
