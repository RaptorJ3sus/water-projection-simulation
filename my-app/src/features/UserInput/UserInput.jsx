import React, { useState } from "react";
//import tanks from "../../data/tank";
//import { Box, Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { userInputTanks } from "../tanks/tankSlice";

const UserInput = () => {
  const dispatch = useDispatch();
  //const [tank, setTanks] = useState(tanks);

  const [tankId, setTankId] = useState("");
  const [tankLevelPercentage, setTankLevelPercentage] = useState(0);
  const [tankLevelMetric, setTankLevelMetric] = useState(0);
  const [tankCapacity, setTankCapacity] = useState(0);
  const [tankLevelMetricCarryOver, setTankLevelMetricCarryOver] = useState(0);

  const handleId = (e) => {
    setTankId(e.target.value);
  };
  const handlePercentage = (e) => {
    //transform to Int/Float
    setTankLevelPercentage(e.target.valueAsNumber);
  };
  const handleMetric = (e) => {
    setTankLevelMetric(e.target.valueAsNumber);
  };
  const handleCapacity = (e) => {
    setTankCapacity(e.target.valueAsNumber);
  };
  const handleCarryOver = (e) => {
    setTankLevelMetricCarryOver(e.target.valueAsNumber);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const singleTank = {
      tankId,
      tankLevelPercentage,
      tankCapacity,
      tankLevelMetric,
      tankLevelMetricCarryOver,
    };
    dispatch(
      userInputTanks({
        ...singleTank,
      })
    );
    //setTanks([...tank, singleTank]); // dispatch should be here
    //console.log(singleTank);
  };

  return (
    <Grid>
      <Typography>Enter Tank Properties </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        //autocomplete="off"
      >
        <TextField
          type="text"
          id="tankId"
          name="tankId"
          label="Tank Number"
          variant="outlined"
          value={tankId}
          onChange={handleId}
        ></TextField>
        <TextField
          type="number"
          id="tankLevelPercentage"
          name="tankLevelPercentage"
          label="Tank Percentage"
          variant="outlined"
          value={tankLevelPercentage}
          onChange={handlePercentage}
        ></TextField>
        <TextField
          type="number"
          id="tankLevelMetric"
          name="tankLevelMetric"
          label="Tank Metric"
          variant="outlined"
          value={tankLevelMetric}
          onChange={handleMetric}
        ></TextField>
        <TextField
          type="number"
          id="tankCapacity"
          name="tankCapacity"
          label="Tank Capacity"
          variant="outlined"
          value={tankCapacity}
          onChange={handleCapacity}
        ></TextField>
        <TextField
          type="number"
          id="tankLevelMetricCarryOver"
          name="tankLevelMetricCarryOver"
          label="Tank Carry Over"
          variant="outlined"
          value={tankLevelMetricCarryOver}
          onChange={handleCarryOver}
        ></TextField>
      </Box>
      <button onClick={handleSubmit} type="submit">
        Add Tank
      </button>
    </Grid>
  );
};

export default UserInput;
