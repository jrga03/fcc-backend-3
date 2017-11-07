var http = require("http")
var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

http.get(url1, function(res){
    res.setEncoding("utf8")
    
    var string = ''
    
    res.on('data', function(data){ string += data })
    res.on('error', console.error)
    res.on('end', function(){
        http.get(url2, function(res2){
            var string2 = ''
            
            res2.on('data', function(data2){ string2 += data2 })
            res2.on('error', console.error)
            res2.on('end', function(){
                http.get(url3, function(res3){
                    var string3 = ''
                    
                    res3.on('data', function(data3){ string3 += data3 })
                    res3.on('error', console.error)
                    res3.on('end', function(){
                        console.log(string)
                        console.log(string2)
                        console.log(string3)
                    })
                }).on('error', console.error)
            })
        }).on('error', console.error)
    })
}).on('error', console.error)
