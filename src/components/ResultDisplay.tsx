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

  return (
    <div>
      <h1>{pollenCount}</h1>
    </div>
  );
};
