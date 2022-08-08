


var fs = require('fs')  
       
var FTR = fs.readFileSync(process.argv[2])

var lines = FTR.toString().split('\n').length - 1  

console.log(lines)