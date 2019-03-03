let state = 0;
const writeToOutput = require("./data/dataWriter/writeFile");
const isLast = require("./isLastSingleton/isLast");

class Observer {
  constructor(stage) {
    /*this is where the observer class (either producer,recycler,etc) depending on the class
    and since its only one event i dindnt make it an array */
    this.observer;
    this.stage = stage;
  }

  subscribe(subscriber) {
    this.observer = subscriber;
  }

  stop(product) {
    this.observer.stop();
    return;
  }

  notify(product) {
    console.log(isLast.status());
    if (state === 5000) {
      isLast.setStatus(true);
    }
    if(isLast.status()){
      return;
    }
    writeToOutput(`${product.name} ${product.productNo} ${this.stage}`, () => {
      this.observer.notify(product);
      product.stage = this.stage;
      state++;
    });
  }
}

const Producer = new Observer("Producer");
const Retailer = new Observer("Retailer");
const Consumer = new Observer("Consumer");
const Recycler = new Observer("Recycler");
// const input = require('../data/cleanedInput');

Producer.subscribe(Retailer);
Retailer.subscribe(Consumer);
Consumer.subscribe(Recycler);
Recycler.subscribe(Producer);

// Producer.notify({ name: "Jacqui Mandel", productNo: 65, stage: "Producer" });

function stage(obj) {
  switch (obj.stage) {
    case "Producer":
      Producer.notify(obj);
      break;

    case "Retailer":
      Retailer.notify(obj);
      break;

    case "Consumer":
      Consumer.notify(obj);
      break;

    case "Recycler":
      Consumer.notify(obj);
      break;
  }
}

function run() {
  stage({ name: "Jacqui Mandel", productNo: 65, stage: "Producer" });
  stage({ name: "Sweet Tdelss", productNo: 55, stage: "Retailer" });
  stage({ name: "Hazel Nuts", productNo: 55, stage: "Recycler" });
}

run();
