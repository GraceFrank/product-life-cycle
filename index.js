const Observer = require("./Observers/Observer");
const Producer = new Observer("Producer");
const Retailer = new Observer("Retailer");
const Consumer = new Observer("Consumer");
const Recycler = new Observer("Recycler");
const input = require("./data/cleanedInput");
const isLast = require("./isLastSingleton/isLast");

Producer.subscribe(Retailer);
Retailer.subscribe(Consumer);
Consumer.subscribe(Recycler);
Recycler.subscribe(Producer);

// Producer.notify({ name: "Jacqui Mandel", productNo: 65, stage: "Producer" });

function stage(obj) {
  switch (obj.stage) {
    default :
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
}

for (const value of input) {
  if (input.length - 1 === value.productNo) {
    isLast.setLastObj(value);
  }
  stage(value);
}