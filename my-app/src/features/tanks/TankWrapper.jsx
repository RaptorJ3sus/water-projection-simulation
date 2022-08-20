import React from "react";
import Tank from "./Tank";
import { useSelector } from "react-redux";

const TankWrapper = () => {
  const { tanks } = useSelector((store) => store.tank);
  const { trains } = useSelector((store) => store.train);
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
        {tanks.map((tank) => {
          return <Tank key={tank.tankId} {...tank} />;
        })}
      </div>
    </section>
  );
};

export default TankWrapper;
