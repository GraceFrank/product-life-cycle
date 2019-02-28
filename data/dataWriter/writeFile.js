//the purpose of this function is to write to the output file
const fs = require('fs');

function writeToOutput(data, task){
  fs.appendFile('/Users/Gracey/Documents/DevTools/Check-Points/checkPoint2/data/output.txt', `${data}\n`, task);
}

module.exports = writeToOutput;

