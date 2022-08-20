import { useState } from "react";
import "./App.css";
import TrainWrapper from "./features/trains/TrainWrapper";
import TankWrapper from "./features/tanks/TankWrapper";
import UserInput from "./features/UserInput/UserInput";
import ConsumerWrapper from "./features/consumers/ConsumerWrapper";
import SimulatorFunction from "./features/Simulator/SimulatorFunction";
function App() {
  return (
    <div className="App">
      <UserInput />
      <TrainWrapper />
      <TankWrapper />
      <ConsumerWrapper />
      <SimulatorFunction />
    </div>
  );
}

export default App;
