const Product = require("./Product");

test("that Product creates an object", () => {
  const newProduct = new Product();
  expect(typeof newProduct).toBe("object");
});

test("that it creates an object with all passed parameters", () => {
  const newProduct = new Product("cocacola", 88, "Producer");
  expect(newProduct).toEqual({
    name: "cocacola",
    productNo: 88,
    stage: "Producer"
  });
});

test("if no parameter is passed for stage it gives a default parameter of Producer", () => {
  const newProduct = new Product("cocacola", 88);
  expect(newProduct).toEqual({
    name: "cocacola",
    productNo: 88,
    stage: "Producer"
  });
});

test("if a wrong parameter is passed for stage it gives a default parameter of Producer", () => {
  const newProduct = new Product("cocacola", 88, "Producer");
  expect(newProduct).toEqual({
    name: "cocacola",
    productNo: 88,
    stage: "Producer"
  });
});
