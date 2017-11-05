var fs = require("fs");

var file = fs.readFileSync(process.argv[2]);

var contents = file.toString().split('\n');

console.log(contents.length - 1);
