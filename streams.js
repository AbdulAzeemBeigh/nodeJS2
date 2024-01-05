const fs = require("fs");
const server = require("http").createServer();

server.on("request",(req,res)=>{
    //solution 1
    // fs.readFile(`${__dirname}/test-file.txt`,(err,data)=>{
    //     if(err) console.log(err);
    //     res.end(data);
    // });

    // solution 2 : STREAMS
    // const readable = fs.createReadStream("test-file.txt");
    // readable.on("data", chunk=>{
    //     res.write(chunk);
    //     // here every chunk of data is read and then streamed as a response one by one
    //     // However this process creates a problem called BACKPRESSURE.
    // });
    // readable.on("error",err=>{
    //     console.log(err);
    //     res.statusCode= 500;
    //     res.end("file not found");
    // });
    // readable.on("end",()=>{
    //     res.end();
    // });

    // solution 3 : 
   const readable = fs.createReadStream("test-file.txt");
   readable.pipe(res);
});

server.listen(8000,'127.0.0.1',()=>{
    console.log("Server is listening");
});