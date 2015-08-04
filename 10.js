var net = require('net')

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))




//// MY ORIGINAL NOOB WAY //////


// var net = require("net");

// var month = function (date) {
//   var month = date.getMonth();
//   month++
//   if (month < 10) {
//     return "0" + month;
//   } else {
//     return month;
//   };
// };

// var day = function (date) {
//   var day = date.getDate();
//   if (day < 10) {
//     return "0" + (day);
//   } else {
//     return day;
//   }
// }

// var hours = function (date) {
//   var hours = date.getHours();
//   if (hours < 10) {
//     return "0" + hours;
//   } else {
//     return hours;
//   }
// }

// var minutes = function (date) {
//   var minutes = date.getMinutes();
//   if (minutes < 10) {
//     return "0" + minutes;
//   } else {
//     return minutes;
//   }
// }

// var server = net.createServer(function (socket){
//   var date = new Date();
//   var formatted_date = date.getFullYear() + "-" + month(date) + "-" + day(date) + " " + hours(date) + ":" + minutes(date);
//   socket.end(formatted_date);
// });

// port = process.argv[2]
// server.listen(port)