const writeToOutput = require("../data/writeFile");

const Consumer = function(stage) {
  this.stage = stage;

  this.go = function() {
    writeToOutput(`Consumer consumes ${stage.productName}\n`);
    console.log(`Consumer consumes ${stage.productName}`);
    stage.change(new Recycler(stage));
  };
};

module.exports = Consumer;
