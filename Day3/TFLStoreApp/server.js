const { response } = require('express');
var express=require('express');
const { request } = require('http');
var path= require ('path');

const app = express();
//Http handler GET http://localhost:9000/

var staticMiddleware=express.static(path.join(__dirname,"public"));
var urlEncodedMiddleware=express.urlencoded({extended:true});
var jsonParsingMiddleware=express.json();


//defines HTTP pipeline
//each middleware configure will interact incoming request before
//Http handler


app.use(urlEncodedMiddleware);
app.use(jsonParsingMiddleware);
app.use(staticMiddleware);       // configure middleware for express app


// http request mapped with respective HTTP handler

app.get ("/", (request,response)=>{
    console.log("default HTTP handler is called at server");
    //response.status(200).send( "<h1>welcome to Transflower Store </h1>");
    response.sendFile(path.join("/index.html"));
});


app.post("/login",(request,response)=>{
    var credential=request.body;
    console.log(credential);


    if(credential.email==="akashajab1234@gmail.com" &&  credential.password==="Akash@123"){
        console.log("validation successful");
        response.redirect("/order.html");
        response.end();
    }

    else{
        console.log("Invalid User");

    }
})
app.listen(9000);
console.log("HTTP server is listening on port 9000");
