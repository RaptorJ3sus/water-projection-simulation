import React from "react";
import Grid from "@mui/material/Grid";

const train = ({
  trainId,
  trainRunLength,
  trainWaterOutput,
  regenTime,
  regenWaterRequired,
  currentTankId,
  produceWater,
  regenWater,
  estimatedRegenTime,
  estimatedRunLength,
  resetTrain,
}) => {
  return (
    <Grid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={2}>
          <button onClick={() => produceWater()}>Run Train {trainId}</button>
        </Grid>
        <Grid item xs={2}>
          Run Length - {trainRunLength}
        </Grid>
        <Grid item xs={2}>
          Water Output - {trainWaterOutput}
        </Grid>
        <Grid item xs={2}>
          Regen Time - {regenTime}
        </Grid>
        <Grid item xs={2}>
          Regen Water - {regenWaterRequired}
        </Grid>
        <Grid item xs={2}>
          Delivering to Tank - {currentTankId}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default train;
