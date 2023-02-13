//Libarary
//more than one function are kept for reusability point of view 


var show = function(){
    console.log("show function Imlementation")
};

//declare function to invoked from outside 

//custom function 

exports.display=function(){
    //user defined object :JSON
    var product={
        "id":56,
        "title":"Gerbera",
        "description":"wedding flower",
        "unit price":4,
        "quantity":8000
    };
    console.log("this is logic for display");
    console.log(product);
};
