//the purpose of this function is to write to the output file
const fs = require('fs');

function writeToOutput(data){
  fs.appendFileSync('/Users/Gracey/Documents/DevTools/checkPoint2/data/output.txt', `${data}\n`);
}

module.exports = writeToOutput;

