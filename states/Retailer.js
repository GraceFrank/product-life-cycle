const writeToOutput = require("../data/writeFile");

const Retailer = function(stage) {
  this.stage = stage;

  this.go = function() {
    writeToOutput(`Retailer bought ${stage.productName}\n`);
    console.log(`Retailer bought ${stage.productName} `);
    stage.change(new Consumer(stage));
  };
};

module.exports = Retailer;
