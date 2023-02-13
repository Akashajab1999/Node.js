var fs =require('fs');

var onFileAppend=function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("file appended successfuly");

    }
};

fs.appendFile('text.txt',
            'welcome to Transflower learning',
             onFileAppend);