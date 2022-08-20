import React from "react";
import Consumer from "./Consumer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const consumerWrapper = () => {
  const { consumers } = useSelector((store) => store.consumer);
  const dispatch = useDispatch();
  return (
    <section>
      <header>
        <h2>The Demin Water Consumers</h2>
      </header>
      <div>
        {consumers.map((consumer) => {
          return <Consumer key={consumer.consumerId} {...consumer} />;
        })}
      </div>
    </section>
  );
};

export default consumerWrapper;
