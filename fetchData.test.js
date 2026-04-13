const fetchDataFunction = require("./fetchData");

test("should return data successfully", async () => {
  const data = await fetchDataFunction();
  expect(data).toBe("Data loaded");
});
