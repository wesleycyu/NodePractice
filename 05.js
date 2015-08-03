var fs = require('fs');

var directory = process.argv[2];
var file_type = process.argv[3];
var file_filter = new RegExp("\." + file_type);

fs.readdir(directory, function(err, list) {
  var output = list.filter(function(element){
    return file_filter.test(element)
  });
  output.forEach(function(element){
    console.log(element)
  })
});
