// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {

  var i = 0;
  var previous;

  if(typeof initialValue == "undefined"){
    i++;
    previous = arr[0];
  }
  else{
    previous = initialValue;
  }

  for (; i < arr.length; i++){
    previous = callback(previous, arr[i], i, arr);
  }
  return previous;
}


/*
 Best if you don't code out here.
 If you want to check your code, use tests or `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
