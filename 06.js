var dir = require("./mymodule");

var directory = process.argv[2];
var file_type = process.argv[3];

dir(directory, file_type, function(err, list){
  list.forEach(function(element){
    console.log(element)
  });
});

