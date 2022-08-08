


var fs = require('fs') ; 
var file = process.argv[2];  
  
fs.readFile(file, function (err, res) { 

  var lines = res.toString().split('\n').length - 1  ;

  console.log(lines)  ;
}
)