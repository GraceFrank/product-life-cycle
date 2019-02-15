const fs = require('fs');
let file;

fs.readFile('Product-Input.txt', 'utf8', function(err, contents) {
    file = contents.toString();
   file = file.replace(/[^\w \n]/gi, "");
   file = file.replace(/ +/gi, " ");
   file = file.replace(/\n+/gi, "\n");

    file = file.split('\n')    ;
    // for(let i= 0; i<file.length; i++){
    //     file[i]= file[i].split(' ');
    // }
    console.log(file);
});

console.log('after calling readFile');