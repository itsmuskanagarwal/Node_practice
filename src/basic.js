console.log("Node Practice 101")

const { response } = require("express");

const http = require("http"); //importing core module here

const server = http.createServer(          //this is callback 
    (req, res) => {
        res.end('Hello from Server Side'); //response given to the request
    }
);

server.listen(8000, ()=>{
    console.log("Listening to the port here 8000");
});