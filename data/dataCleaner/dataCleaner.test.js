const cleaner = require("./dataCleaner");

test("a case where there are only characters on new line", () => {
  const string1 = `//
  //
  //
`;

  const string2 = ``;
  expect(cleaner(string1)).toBe(string2);
});

test("a case where there are excess spaces", () => {
  const string1 = `Rosetta Fagen	  	 	 	Producer`;
  const string2 = `Rosetta Fagen Producer`;
  expect(cleaner(string1)).toBe(string2);
});
