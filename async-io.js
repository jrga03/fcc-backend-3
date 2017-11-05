var fs = require("fs");

fs.readFile(process.argv[2], function doneReading(error, fileContents) {
    if (error) {
        console.log(error);
    }
    var contents = fileContents.toString().split("\n");
    console.log(contents.length - 1);
})
