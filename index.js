const input = require("./data/cleanedInput");
const Product = require("./states/Product/Product");
const getStage = require("./states/getStage/getStage");

function run(file) {
  for (let i = 1; i < file.length; i++) {
    let drink = new Product(
      `${file[i][0]} ${file[i][1]}`,
      getStage[file[i][2]]
    );
    drink.start();
  }
}
run(input);
