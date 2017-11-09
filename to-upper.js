var map = require('through2-map')
var http = require('http')

var server = http.createServer(function(req,res){
    if (req.method !== 'POST') {
        return res.end('Please POST\n')
    }
    
    req.pipe(map(function (stream) {
        return stream.toString().toUpperCase()
    })).pipe(res)
})
server.listen(Number(process.argv[2]))