const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();
setTimeout(()=>console.log("Timmer1 finished"),0);
setImmediate(()=>console.log("Immediate finished"));

fs.readFile(`${__dirname}/test-file.txt`,()=>{
    console.log("I/O finished");
    console.log("-------------------------");
    setTimeout(()=>console.log("Timmer 2 finished"),0);
    setTimeout(()=>console.log("Timmer 3 finished"),0);
    setImmediate(()=>console.log("Immediate 2 finished"));


    crypto.pbkdf2Sync('password','salt',100000,1024,'sha512');
    console.log(Date.now()-start,"Password encrypted");

    crypto.pbkdf2('password','salt',100000,1024,'sha512',()=>{
        console.log(Date.now()-start,"Password encrypted");
    });
    crypto.pbkdf2('password','salt',100000,1024,'sha512',()=>{
        console.log(Date.now()-start,"Password encrypted");
    });
    crypto.pbkdf2('password','salt',100000,1024,'sha512',()=>{
        console.log(Date.now()-start,"Password encrypted");
    });
    crypto.pbkdf2('password','salt',100000,1024,'sha512',()=>{
        console.log(Date.now()-start,"Password encrypted");
    });
});

console.log("Top level code");