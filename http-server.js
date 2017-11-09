var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req,res) {
    var file = fs.createReadStream(process.argv[3])
    
    file.on("open", function(){
        file.pipe(res)
    })
    file.on("error", function(err){
        res.end(err)
    })
    
    // fs.createReadStream(process.argv[3]).pipe(res)  // better solution
})

server.listen(Number(process.argv[2]))