const fs = require("fs");
const isLast = require("../is-last-singleton/is-last");

// Observer Class
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

  notify(product) {
    if (isLast.status() === true) {
      return;
    }
    fs.appendFile(
      "./data/output.txt",
      `${product.name} ${product.productNo} ${this.stage}`,
      () => {
        this.observer.notify(product);
        product.stage = this.stage;
      }
    );
  }
}

module.exports = Observer;
