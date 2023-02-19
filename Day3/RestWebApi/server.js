var express=require ('express');
var bodyParser=require('body-parser');
const app=express();


//middleware body-parser

app.use(bodyParser.json());


var flowers=[
    {"id":1, "title":"Gerbera","Description":"wedding flower","Unitprice":10,quantity:2000},
    {"id":1, "title":"Rose","Description":"Valentine  flower","Unitprice":10,quantity:2000},
    {"id":1, "title":"Jasmine","Description":"Aroma flower","Unitprice":10,quantity:2000},
    {"id":1, "title":"Lotus","Description":"Worship flower","Unitprice":10,quantity:2000},
    {"id":1, "title":"Marigold","Description":"Festival flower","Unitprice":10,quantity:2000},
    {"id":1, "title":"Lily","Description":"Beautiful flower","Unitprice":10,quantity:2000},
    {"id":1, "title":"Orchid","Description":"Delicate flower","Unitprice":10,quantity:2000}
];


// Request mapping with url and callback functions

app.get("/api/flowers",(req,res)=>{
    console.log("Sending all flowers available");
    res.send(flowers);
});



app.post("/api/flowers",(req,res)=>{
    var newFlower=req.body;
    flowers.push(newFlower);
    console.log("Adding new flower to collection....");
    res.status(200).send("pushed object successfully");
});


app.put("/api/flowers/:id",(req,res)=>{
    var idofFlower=req.params.id;

    var updatedFlower=req.body;
    //array updation code is needed
    //update the flower whose id =mentioned id;

    console.log("Updating existing flower from collection with another flower...."+ idofFlower);
    res.status(200).send("flower is updated from collection..." + idofFlower);
});


app.delete("/api/flowers/:id",(res,req)=>{
    //removing existing flower whoose id is maching collection.

    var idofFlower=req.params.id;
    console.log("Delating existing flower from collection..." +idofFlower);
    res.status(200).send("flower is delated from collection..." +idofFlower);
});

app.listen(9000,()=>{
    console.log("api server is listening on port 9000");
})