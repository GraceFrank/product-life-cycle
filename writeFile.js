const fs = require('fs');
data = "i love you too\n";

fs.appendFileSync('output.txt', data);
fs.appendFileSync('output.txt', "data\n");

