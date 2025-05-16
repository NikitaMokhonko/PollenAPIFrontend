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

  if (pollenCount === null) return <div>Loading...</div>;

  let image = "";

  switch (true) {
    case pollenCount === 1:
      image = "public/images/PollenCount1.png";
      break;
    case pollenCount === 2:
      image = "public/images/PollenCount2.png";
      break;
    case pollenCount === 3:
      image = "public/images/PollenCount3.png";
      break;
    case pollenCount === 4:
      image = "public/images/PollenCount4.png";
      break;
    case pollenCount === 5:
      image = "public/images/PollenCount5.png";
      break;
    case pollenCount === 6:
      image = "public/images/PollenCount6.png";
      break;
    case pollenCount === 7:
      image = "public/images/PollenCount7.png";
      break;
    default:
  }

  return (
    <div>
      <img className="border-2 border-black rounded-2xl"
        src={image}
        alt={`Pollen count: ${pollenCount}`}
      />
    </div>
  );
};
