var fs = require('fs');

var filter = function(directory_path, file_type, callback) {
  var file_filter = new RegExp("\." + file_type);
  fs.readdir(directory_path, function(err, list){
    if (err) {
      callback(err)
      return
    }
    var output = list.filter(function(element){
      return file_filter.test(element);
    });
    callback(null, output)
  });
};

module.exports = filter;
