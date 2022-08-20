import React from "react";
import Consumer from "./Consumer";
import { useSelector } from "react-redux";

const ConsumerWrapper = () => {
  const { consumers } = useSelector((store) => store.consumer);
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

export default ConsumerWrapper;
