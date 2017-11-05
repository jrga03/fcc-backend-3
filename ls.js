var fs = require("fs");

var ext = "." + process.argv[3];

fs.readdir(process.argv[2], function doneReading(err, list){
    if (err) {
        console.log(err);
    }
    
    for (var i=0; i<list.length; i++){
        var dotIndex = list[i].indexOf('.');
        
        if (list[i].substr(dotIndex) == ext) {
            console.log(list[i]);
        }
    }
    // console.log(list);
})
