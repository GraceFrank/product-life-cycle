const Producer = require("./Producer");
const Consumer = require("./Consumer");
const Retailer = require("./Retailer");
const Recycler = require("./Recycler");


const Product = function(productName, givenStage = Producer) {
  this.productName = productName;
  let currentState = new givenStage(this);
  this.change = function(state) {
    // limits number of changes
    currentState = state;
    currentState.go();
  };

  this.start = function() {
    currentState.go();
  };
};

module.exports = Product;