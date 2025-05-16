export const fetchPollenCount = async () => {
  const result = await fetch("http://localhost:8080/api");
  const pollenCount = await result.json();
  return pollenCount[0].pollenCount;
};
