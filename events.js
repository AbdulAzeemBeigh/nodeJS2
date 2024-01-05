const EventEmitter = require("events");
const myEmitter = new EventEmitter();
const http = require("http");

myEmitter.on("mynewSale",()=>{
    console.log("There was a new sale!")
});
myEmitter.on("mynewSale",()=>{
    console.log("Costumer-Name : Johns");
});
myEmitter.on("mynewSale",stock=>{
    console.log(`There are now ${stock} items left in the stock`);
});
myEmitter.emit("mynewSale",9);

///////////////////////////////////////////////

const server = http.createServer();

server.on("request",(req,res)=>{
    console.log("request recieved");
    console.log(req.url);
    res.end("request recieved");
});

server.on("request",(req,res)=>{
    console.log("REQUEST RECIEVED");
});

server.on("close",()=>{
    console.log("server closed");
});

server.listen(8000,'127.0.0.1',()=>{
    console.log("Waiting for requests............");
});