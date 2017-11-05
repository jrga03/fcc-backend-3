var fs = require("fs");


module.exports = function (directory, extension, callback) {
    var ext = "." + extension;
    
    fs.readdir(directory, function doneReading(err, list){
        if (err) {
            return callback(err);
        }
        
        var data = list.filter(function(i){
            var dotIndex = i.indexOf('.');
            if (i.substr(dotIndex) == ext){
                return i;
            }
        })
        
        callback(null, data);
    })
    
    
}