export const fetchPollenCount = async () => {
  let pollenCount;
  try {
    const result = await fetch(
      "https://pollenapibackend-production.up.railway.app/api"
    );
    pollenCount = await result.json();
  } catch (err) {
    return "An error occured while loading pollen data :(";
  }

  return pollenCount[0].pollenCount;
};
