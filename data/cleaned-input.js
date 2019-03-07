const fs = require("fs");
const clean = require("./data-cleaner/data-cleaner");
const convert = require("./data-converter/convert");

//Reading file from input file, converts it to string in utf8 and stroes in input variable
let input = url => {
  return fs.readFileSync(url, "utf8");
};

function cleanAndConvert(string) {
  string = clean(string);
  fs.appendFileSync("./data/cleaned-input.txt", `${string}`);
  string = convert(string);

  return string;
}

let inputResult = url => {
  return cleanAndConvert(input(url));
};

module.exports = inputResult;
