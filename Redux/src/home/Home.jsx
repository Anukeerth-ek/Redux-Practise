import React, { useState } from "react";
import data from "../api/data.json";

import LaptopCard from "./LaptopCard";

const Home = () => {
  return (
    <section>
      <div className="mx-48 py-10">
        <ul className="flex flex-wrap">
          {data.map((item) => (
            <LaptopCard key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home