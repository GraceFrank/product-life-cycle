const fs = require("fs");
const isLast = require("../last-object-status/is-last");

// Observer Class, all stages in the cycle(either producer,recycler inherit from this class)
class Observer {
  constructor(stage) {
    this.observer; //this is the object that listens/observes this object
    this.stage = stage; //is the stage in the cycle, producer, consumer, recycler or retailer
  }

  subscribe(subscriber) {
    //this is to make an object an observer/listener of this object
    this.observer = subscriber;
  }

  //notify is where the observer/lister is notified,
  notify(product) {
    fs.appendFile(
      "./data/output.txt",
      `${product.name} ${product.productNo} ${this.stage}\n`,
      () => {
        if (isLast.status() === true) {
          return;
        }
        this.observer.notify(product);
        product.stage = this.stage;
      }
    );
  }
}

module.exports = Observer;
