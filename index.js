const fs = require("fs");
const input = require('./data/cleanedInput');
const Product = require("./states/Product");
const Producer = require("./states/Producer");
const Consumer = require("./states/Consumer");
const Retailer = require("./states/Retailer");
const Recycler = require("./states/Recycler");
const getStage = require("./states/getStage");

function run(file) {
  for (let i = 1; i < file.length; i++) {
    let drink = new Product(
      `${file[i][0]} ${file[i][1]}`,
      getStage(file[i][2])
    );
    drink.start();
  }
}
run(input);