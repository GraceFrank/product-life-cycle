const writeToOutput = require("../data/writeFile");
const Producer = function(stage) {
  this.stage = stage;

  this.go = function() {
    writeToOutput(`producer produced ${stage.productName}\n`);

    console.log(`producer produced ${stage.productName}`);
    stage.change(new Retailer(stage));
  };
};

module.exports = Producer;
