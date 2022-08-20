import React from "react";
import Tank from "./Tank";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//import simulatorFunction from "../Simulator/SimulatorFunction";

const tankWrapper = () => {
  const { tanks } = useSelector((store) => store.tank);
  const { trains } = useSelector((store) => store.train);

  const dispatch = useDispatch();
  const consolelogfunction = (tanks) => {
    tanks.map((tank) => {
      console.log(tank);
      return { ...tank };
    });
  };
  return (
    <section>
      <header>
        <h2>The Storage Tanks</h2>
      </header>
      <div>
        <button onClick={() => consolelogfunction(tanks)}>
          Log Console Tanks
        </button>
        <button onClick={() => consolelogfunction(trains)}>
          Log Console Trains
        </button>
        {/* <button onClick={() => simulatorFunction()}>Run simulation</button> */}

        {tanks.map((tank) => {
          //console(tank);
          return <Tank key={tank.tankId} {...tank} />;
        })}
        {/* {tanks.forEach((tank) => {
          console.log(tank);
        })} */}
      </div>
    </section>
  );
};

export default tankWrapper;
