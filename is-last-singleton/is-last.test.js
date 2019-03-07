const isLast = require("./isLast");

let first = isLast;
let second = isLast;
isLast.setLastObj({ name: "cocoala", id: 55, stage: "Recycler" });

test("that two instances of islast are the same", () => {
  expect(first === second).toBeTruthy();
});

test("that after islast is modifeid, it remains the same in any instance", () => {
  expect(first === isLast).toBeTruthy();
});

test("that when last object is recycler, status is changed to true", () => {
  expect(isLast.status()).toBe(true);
});
