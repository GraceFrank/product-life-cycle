const writeToOutput = require("../data/writeFile");

const Recycler = function(stage) {
  this.stage = stage;

  this.go = function() {
    writeToOutput(`Recycler recycled ${stage.productName}\n`);
    console.log(`Recycler recycled ${stage.productName}`);
  };
};

module.exports = Recycler;
