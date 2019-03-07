const convert = require("./convert");

test("that it converts a string to an array of object", () => {
  const string = `Calista Na Producer`;
  expect(convert(string)).toEqual([
    {
      name: "Calista Na",
      productNo: 0,
      stage: "Producer"
    }
  ]);
});
