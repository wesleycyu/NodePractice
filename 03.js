var fs = require('fs');

var format_argv = function(input) {

  var result = input
  input.shift();
  input.shift();
  return result;
};

var file_path = format_argv(process.argv);
var buf = fs.readFileSync(file_path[0]);
var string = buf.toString();

console.log(string.split("\n").length - 1)



