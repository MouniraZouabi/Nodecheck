const filename = process.argv[2];
const ext = process.argv[3];

var solution = require('./mymodule');

solution(filename, ext, function(error, list) {

  if (error) return console.error(error);

  list.forEach(function (file) {
      console.log(file);
  }
  );
}
);