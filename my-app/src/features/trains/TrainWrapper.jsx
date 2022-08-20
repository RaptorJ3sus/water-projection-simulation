import { useSelector } from "react-redux";
import React from "react";
import Train from "./Train";
import {
  produceWaterFromTrainToTank,
  supplyWaterFromTankToTrain,
  carryOverProductionWater,
  resetTankAfterCarryOver,
  carryOverRegenWater,
  resetTankAfterRegenCarryOver,
} from "../tanks/tankSlice";
import {
  switchOutputCurrentTankId,
  switchRegenCurrentTankId,
} from "../trains/trainSlice";
import { resetTrainAfterRegen } from "./trainSlice";
import { useDispatch } from "react-redux";

const TrainWrapper = () => {
  const dispatch = useDispatch();
  const { trains } = useSelector((store) => store.train);
  const { tanks } = useSelector((store) => store.tank);
  return (
    <section>
      <header>
        <h2>The Trains</h2>
      </header>
      <div></div>
      <div>
        {trains.map((train) => {
          const tankInfo = tanks.find((info) => {
            return info.tankId === train.currentTankId;
          });
          const switchOutputTankInfo = tanks.find((info) => {
            return info.tankLevelMetric < info.tankCapacity;
          });
          const switchRegenTankInfo = tanks.find((info) => {
            return info.tankLevelMetric > 0;
          });

          return (
            <Train
              key={train.trainId}
              {...train}
              produceWater={() => {
                if (
                  train.trainRunLength === 0 &&
                  train.regenTime > 0 &&
                  tankInfo.tankLevelMetric <= 0
                ) {
                  const updatedCurrentTankId = switchRegenTankInfo.tankId;
                  const updatedTankLevelMetric =
                    switchRegenTankInfo.tankLevelMetric +
                    (tankInfo.tankLevelMetricCarryOver + tankInfo.tankCapacity);
                  const updatedTankLevelPercentage =
                    (100 * updatedTankLevelMetric) /
                    switchRegenTankInfo.tankCapacity;
                  const updatedTankLevelPercentageEx =
                    updatedTankLevelPercentage.toFixed(2);
                  dispatch(
                    switchRegenCurrentTankId({
                      tankId: train.currentTankId,
                      trainId: train.trainId,
                      currentTankId: updatedCurrentTankId,
                    })
                  );
                  dispatch(
                    carryOverRegenWater({
                      tankId: updatedCurrentTankId,
                      tankLevelMetric: updatedTankLevelMetric,
                      tankLevelPercentage: updatedTankLevelPercentageEx,
                    })
                  );
                  dispatch(
                    resetTankAfterRegenCarryOver({
                      tankId: tankInfo.tankId,
                      tankLevelMetric: 0,
                      tankLevelPercentage: 0,
                      tankLevelMetricCarryOver: 0,
                    })
                  );
                }
                if (
                  train.trainRunLength > 0 &&
                  tankInfo.tankLevelMetric >= tankInfo.tankCapacity
                ) {
                  const updatedCurrentTankId = switchOutputTankInfo.tankId;
                  const updatedTankLevelMetric =
                    switchOutputTankInfo.tankLevelMetric +
                    tankInfo.tankLevelMetricCarryOver;
                  const updatedTankLevelPercentage =
                    (100 * updatedTankLevelMetric) /
                    switchOutputTankInfo.tankCapacity;
                  const updatedTankLevelPercentageEx =
                    updatedTankLevelPercentage.toFixed(2);
                  dispatch(
                    switchOutputCurrentTankId({
                      tankId: train.currentTankId,
                      trainId: train.trainId,
                      currentTankId: updatedCurrentTankId,
                    })
                  );
                  dispatch(
                    carryOverProductionWater({
                      tankId: updatedCurrentTankId,
                      tankLevelMetric: updatedTankLevelMetric,
                      tankLevelPercentage: updatedTankLevelPercentageEx,
                    })
                  );
                  dispatch(
                    resetTankAfterCarryOver({
                      tankId: tankInfo.tankId,
                      tankLevelMetric: tankInfo.tankCapacity,
                      tankLevelPercentage: 100,
                      tankLevelMetricCarryOver: 0,
                    })
                  );
                }
                if (
                  train.trainRunLength > 0 &&
                  tankInfo.tankLevelMetric < tankInfo.tankCapacity
                ) {
                  const updatedTankLevelMetric =
                    tankInfo.tankLevelMetric + train.trainWaterOutput;
                  const updatedTankLevelPercentage =
                    (100 * updatedTankLevelMetric) / tankInfo.tankCapacity;
                  const updatedTankLevelPercentageEx =
                    updatedTankLevelPercentage.toFixed(2);

                  const updatedTankLevelMetricCarryOver =
                    updatedTankLevelMetric - tankInfo.tankCapacity;
                  dispatch(
                    produceWaterFromTrainToTank({
                      tankId: train.currentTankId,
                      tankLevelPercentage: updatedTankLevelPercentageEx,
                      tankLevelMetric: updatedTankLevelMetric,
                      trainId: train.trainId,
                      tankLevelMetricCarryOver: updatedTankLevelMetricCarryOver,
                    })
                  );
                }
                if (
                  train.trainRunLength === 0 &&
                  train.regenTime > 0 &&
                  tankInfo.tankLevelMetric > 0
                ) {
                  const updatedTankLevelMetric =
                    tankInfo.tankLevelMetric - train.regenWaterRequired;
                  const updatedTankLevelPercentage =
                    (100 * updatedTankLevelMetric) / tankInfo.tankCapacity;
                  const updatedTankLevelPercentageEx =
                    updatedTankLevelPercentage.toFixed(2);
                  const updatedTankLevelMetricCarryOver =
                    updatedTankLevelMetric - tankInfo.tankCapacity;
                  dispatch(
                    supplyWaterFromTankToTrain({
                      tankId: train.currentTankId,
                      trainWaterOutput: train.trainWaterOutput,
                      trainRunLength: train.trainRunLength,
                      trainId: train.trainId,
                      regenTime: train.regenTime,
                      regenWaterRequired: train.regenWaterRequired,
                      tankLevelMetric: updatedTankLevelMetric,
                      tankLevelPercentage: updatedTankLevelPercentageEx,
                      tankLevelMetricCarryOver: updatedTankLevelMetricCarryOver,
                    })
                  );
                }
                if (train.trainRunLength === 0 && train.regenTime === 0) {
                  const updatedTrainRunLength = train.estimatedRunLength;
                  const updatedRegenTime = train.estimatedRegenTime;
                  dispatch(
                    resetTrainAfterRegen({
                      trainRunLength: updatedTrainRunLength,
                      trainId: train.trainId,
                      regenTime: updatedRegenTime,
                    })
                  );
                }
              }}
            />
          );
        })}
      </div>
      <div></div>
    </section>
  );
};

export default TrainWrapper;
