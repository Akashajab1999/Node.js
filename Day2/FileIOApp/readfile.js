var fs =require('fs');

try{
    fs.readFile('text.txt',(err,data)=>{
        console.log(data.toString());
    })
}

catch(exp){
    console.log(exp)
}
finally{
    
}