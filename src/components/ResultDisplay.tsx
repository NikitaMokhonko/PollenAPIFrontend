import React from "react";
import { fetchPollenCount } from "@/utilities/fetcher";

const pollenCount = fetchPollenCount();
console.log(pollenCount);

export const ResultDisplay: React.FC = () => {
  return (
    <div>
      <h1>Pollen Count: {pollenCount}</h1>
    </div>
  );
};
