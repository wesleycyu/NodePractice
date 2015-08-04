var http = require('http');
var bl = require('bl');

var urls = [];
var count = 0

for (i = 2; i < process.argv.length; i++) {
  urls.push(process.argv[i])
};

var getData = function (urls, action){
  http.get(urls[count], function (response) {
    response.pipe(bl(function(err, data){
      console.log(data.toString());
      if (count <= urls.length){
        count += 1
        action(urls, action)
      }
    }));
  });
};

if (urls){
  getData(urls, getData)
};



/////////////////////////////////////
////////////////////////////////////

/////// Here's another way! ///////

/////////////////////////////////
////////////////////////////////


// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)

//       results[index] = data.toString()
//       count++

//       if (count == 3)
//         printResults()
//     }))
//   })
// }

// for (var i = 0; i < 3; i++)
//   httpGet(i)







