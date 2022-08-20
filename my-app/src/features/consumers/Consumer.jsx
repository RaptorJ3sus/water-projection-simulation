import React from "react";
import Grid from "@mui/material/Grid";

const Consumer = ({ consumerId, consumerWaterRequired, currentTankId }) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={2}>
        Consumer - {consumerId}
      </Grid>
      <Grid item xs={2}>
        Water Consumed- {consumerWaterRequired}
      </Grid>
      <Grid item xs={2}>
        Taking from tank - {currentTankId}
      </Grid>
    </Grid>
  );
};

export default Consumer;
