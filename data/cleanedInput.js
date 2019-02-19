const fs = require("fs");
let input = fs.readFileSync("/Users/Gracey/Documents/DevTools/checkPoint2/data/Product-Input.txt", "utf8");
input = input.replace(/[^\w \n]/gi, "");
input = input.replace(/ +/gi, " ");
input = input.replace(/\n+/gi, "\n");
input = input.split("\n");

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split(" ");
}
console.log(input);
module.exports = input;
