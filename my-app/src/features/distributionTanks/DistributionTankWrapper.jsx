import React from "react";
import DistributionTank from "./DistributionTank";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { storageWaterTransferToDistribution } from "./distributionTankSlice";
import tankWrapper from "../tanks/TankWrapper";

const DistributionTankWrapper = () => {
  const { distributionTanks } = useSelector((store) => store.distributionTank);
  const dispatch = useDispatch();
  return (
    <section>
      <header>
        <h2>The Distribution Tanks</h2>
      </header>
      <div>
        {distributionTanks.map((tank) => {
          return <DistributionTank key={tank.tankId} {...tank} />;
        })}
      </div>
    </section>
  );
};

export default DistributionTankWrapper;
