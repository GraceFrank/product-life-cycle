const Observer = require("./observers/observer");
const input = require("./data/cleaned-input");
const isLast = require("./last-object-status/is-last");

const inputResult = input("./data/product-input.txt");

const Producer = new Observer("Producer");
const Retailer = new Observer("Retailer");
const Consumer = new Observer("Consumer");
const Recycler = new Observer("Recycler");

Producer.subscribe(Retailer);
Retailer.subscribe(Consumer);
Consumer.subscribe(Recycler);
Recycler.subscribe(Producer);

const stage = obj => {
  //stage function decides which stage will handle a product from the input file
  switch (obj.stage) {
    default:
      Producer.notify(obj);
      break;

    case "Retailer":
      Retailer.notify(obj);
      break;

    case "Consumer":
      Consumer.notify(obj);
      break;

    case "Recycler":
      Recycler.notify(obj);
      break;
  }
};

for (const value of inputResult) {
  if (inputResult.length - 1 === value.productNo) {
    // checking for the last object in the input
    isLast.setLastObj(value); //once last object is reached, its then passed to isLast singleton object
  }
  stage(value);
}
