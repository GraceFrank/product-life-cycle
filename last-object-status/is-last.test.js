const isLast = require("./is-last");

let first = isLast;
let second = isLast;

test("that when last object is recycler, status is changed to true", () => {
  expect(isLast.status()).toBe(false);
});



test("that two instances of islast are the same", () => {
  isLast.setLastObj({ name: "cocoala", id: 55, stage: "Recycler" });
  expect(first === second).toBeTruthy();
});

test("that after islast is modifeid, it remains the same in any instance", () => {
  isLast.setLastObj({ name: "cocoala", id: 55, stage: "Recycler" });
  expect(first === isLast).toBeTruthy();
});

test("that when last object is recycler, status is changed to true", () => {
  isLast.setLastObj({ name: "cocoala", id: 55, stage: "Recycler" });
  expect(isLast.status()).toBe(true);
});
