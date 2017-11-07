var net = require('net')

var server = net.createServer(function listener(socket){
    socket.end(dateTime())
})
server.listen(process.argv[2])

function dateTime(){
    var x = new Date()
    var year = x.getFullYear().toString()
    var month = x.getMonth() + 1
    month.toString()
    var day = x.getDate().toString()
    var hour = x.getHours().toString()
    var minute = x.getMinutes().toString()
    
    if (month.length < 2) { month = '0' + month }
    if (day.length < 2) { day = '0' + day }
    if (hour.length < 2) { hour = '0' + hour }
    if (minute.length < 2) { minute = '0' + minute }

    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + '\n'
}
