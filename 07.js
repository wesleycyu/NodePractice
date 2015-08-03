var http = require('http');

var url = process.argv[2];

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
})

// http.get(url, function(response){
//   response.on("data", function(data){
//     console.log(data.toString("utf8"));
//   });
// });