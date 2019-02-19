const Producer = require("./Producer");
const Consumer = require("./Consumer");
const Retailer = require("./Retailer");
const Recycler = require("./Recycler");

function getStage(){
  this.Producer = Producer;
  
  this.Consumer = Consumer;
  
  this.Retailer = Retailer;
  this.Recycler = Recycler;

};

module.exports = getStage;