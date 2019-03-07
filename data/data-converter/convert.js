//convert is used to convert an eintire input into an array of objects

const Product = require("./Product");

function convert(input) {
  //asuming the input is a string, we split it into an array at every newline
  input = input.split("\n");

  for (let i = 0; i < input.length; i++) {
    //each line is now converted to an array of 3 elements
    input[i] = input[i].split(" ");
    //the first two elements form the product name
    //the last elements determines the stage
    //and and the current index is used as the id
    input[i] = new Product(`${input[i][0]} ${input[i][1]}`, i, input[i][2]);
  }
  return input;
}

module.exports = convert;
