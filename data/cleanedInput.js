const fs = require("fs");
const clean = require("./dataCleaner/dataCleaner");
const convert = require("./dataConverter/convert");

//Reading file from input file, converts it to string in utf8 and stroes in input variable
let input = fs.readFileSync(
  "/Users/Gracey/Documents/DevTools/Check-Points/checkPoint2/data/Product-Input.txt",
  "utf8"
);

function cleanAndConvert(string) {
  string = clean(string);
  fs.appendFileSync(
    "/Users/Gracey/Documents/DevTools/Check-Points/checkPoint2/data/cleanedInput.txt",
    `${string}`
  );
  string = convert(string);
  
  return string;
}

input = cleanAndConvert(input)
console.log(input);
module.exports = input;