var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
    var date = new Date(url.parse(req.url, true).query.iso)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    
    if (url.parse(req.url, true).pathname == "/api/parsetime") {
        var parsedate = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds(),
        }
        res.end(JSON.stringify(parsedate))
        
    } else if (url.parse(req.url, true).pathname == "/api/unixtime") {
        var unixtime = {
            "unixtime": date.getTime()
        }
        res.end(JSON.stringify(unixtime))
        
    }
})

server.listen(Number(process.argv[2]))