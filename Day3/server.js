const { response } = require('express');
var express = require('express');
const app =express();
//http handler Get http://localhost/9000/

// HTTP request mapped with respective HTTP handler


app.get("/",(request,Response)=>{
        console.log("default HTTP handler is called at server ");
        Response.status(200).send("<h1>welcome to transflower store app </h1>");
    });

    app.get("/aboutus",(request,Response)=>{
        console.log("about us handler is called at server ");
        Response.status(200).send("<h1>ttransflower learning pvt.ltd</h1>");
    });

    app.get("/contact",(request,Response)=>{
        console.log("contact handler is called at server ");
        Response.status(200).send("<h1>Mentor as a service </h1>"+
                                  "<hr/>"+
                                  "<p>Doing ordinary things extraordinarily</p>");
    });

    app.listen(9000);
    console.log("HTTP server is listening on port 9000");