var http = require("http")

var url = process.argv[2]

var print = http.get(url, function(response){
    response.setEncoding("utf8")
    
    var chars = 0
    var string = ''
    
    response.on("data", function(data){
        chars += data.length
        string += data
    })

    response.on("error", console.error)
    response.on('end', function(){
        console.log(chars)
        console.log(string)
    })
}).on('error', console.error)
