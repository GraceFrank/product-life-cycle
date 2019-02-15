const fs = require('fs');
const productInput = "Product-Input.txt";

const filesize = fs.statSync(productInput).size;
let buf = new Buffer.alloc(filesize);

console.log(filesize);
 
fs.open(productInput, "r+", (err, fd)=>{
    if(err){
        console.log(`code: ${err.code}\nmessage: ${err.message}`);
    }else{
        console.log(`file ${fd} opened sucessfully`);

        let bytes = fs.readSync(fd, buf, 0, filesize, 0);
        console.log(buf.toString());
        fs.close(fd, (err)=>{
            console.log("file is been closed");
        })
    }
})