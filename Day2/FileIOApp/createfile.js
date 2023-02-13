//file IO operation

var fs =require('fs');

fs.writeFile('text.txt','Hello world',
             (err)=>{
                if(err){
                    console.log("error in file writing");

                }
                else
                console.log("file writing completed successfully")
             })