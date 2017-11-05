var mymodule = require("./modular-func");

mymodule(process.argv[2], process.argv[3], fuckit);

function fuckit(err, data){
    if (err){
        console.log(err);
    } else {
        data.forEach(function(j){
            console.log(j);
        })
    }
}