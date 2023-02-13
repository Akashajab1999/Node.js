// App.js act like consumer
var handler = require("./handler");
var ioHandler = require("./io");
console.log("Hello world");
var status = false;
handler.display();

ioHandler.writeToFile("readme.txt","this is sample data");