const Product = require("./Product");

function convert(input) {
  input = input.split("\n");

  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split(" ");
    input[i] = new Product(`${input[i][0]} ${input[i][1]}`, i, input[i][2]);
  }
  return input;
}

module.exports = convert;