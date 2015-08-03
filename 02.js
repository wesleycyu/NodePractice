var array = process.argv
array.shift()
array.shift()

console.log(array.reduce(function(a,b){ return parseInt(a, 10) + parseInt(b, 10)}))