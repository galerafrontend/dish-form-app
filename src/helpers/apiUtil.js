export const postDish = async (values) => {
  try {
    const response = await fetch(
      "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const filterValues = (values) => {
  const filteredValues = {};
  for (const key in values) {
    if (values.hasOwnProperty(key) && values[key] !== "") {
      filteredValues[key] = values[key];
    }
  }
  return filteredValues;
};
