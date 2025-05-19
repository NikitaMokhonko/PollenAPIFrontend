import React, { useEffect, useState } from "react";
import { fetchPollenCount } from "@/utilities/fetcher";

export const ResultDisplay: React.FC = () => {
  const [pollenCount, setPollenCount] = useState(null);

  useEffect(() => {
    async function load() {
      const count = await fetchPollenCount();
      setPollenCount(count);
    }
    load();
  }, []);

  if (pollenCount === null)
    return (
      <div className="flex items-center justify-center pt-20 h-40">
        <div className="animate-spin rounded-full h-30 w-30 border-t-5 border-b-5 border-white"></div>
      </div>
    );
  let image = "";

  switch (true) {
    case pollenCount === 1:
      image = "images/PollenCount1.png";
      break;
    case pollenCount === 2:
      image = "images/PollenCount2.png";
      break;
    case pollenCount === 3:
      image = "images/PollenCount3.png";
      break;
    case pollenCount === 4:
      image = "images/PollenCount4.png";
      break;
    case pollenCount === 5:
      image = "images/PollenCount5.png";
      break;
    case pollenCount === 6:
      image = "images/PollenCount6.png";
      break;
    case pollenCount === 7:
      image = "images/PollenCount7.png";
      break;
    default:
      image = "images/PollenCountError.png";
      break;
  }

  return (
    <div className="">
      <img className="border-4 border-white rounded-4xl" src={image} />
    </div>
  );
};
