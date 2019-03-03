const cleaner = require("./dataCleaner");

test("a case where there are empty spaces and charcters", () => {
  const string1 = `//
  //
  //
  //
  //
  Calista Na Producer
  Lucas Menefee Consumer
  Shon Croley Producer
  Owen Bartkowski Retailer
  Lanny Service   Recycler
  Kimberli Kravitz Prod
  Ilana Bargas		Recycler
  Stephania Durand
  Carly Piazza 	 	
  .;[
  Weston Mainer 		Consumer`;

  const string2 = `Calista Na Producer
  Lucas Menefee Consumer
  Shon Croley Producer
  Owen Bartkowski Retailer
  Lanny Service Recycler
  Kimberli Kravitz Prod
  Ilana Bargas Recycler
  Stephania Durand
  Carly Piazza
  Weston Mainer Consumer`;
  expect(cleaner(string1)).toBe(string2);
});
