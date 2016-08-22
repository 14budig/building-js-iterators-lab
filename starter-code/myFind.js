// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Find
function myFind(arr, callback) {
  for(var x = 0; x < arr.length; x++){
    if(callback(arr[x], x, arr)){
      return arr[x];
    }
  }
return undefined;

}

/*
 Best if you don't code out here.
 If you want to check your code, use tests or `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myFind;
