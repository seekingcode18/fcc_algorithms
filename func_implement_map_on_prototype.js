// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  // create new array to map items into
  var newArray = [];
  // use this to access array that myMap is being called on
  for (let i = 0; i < this.length; i++) {
    // call the function specified later in the myMap argument on the items in this
    // push result to the new array
    newArray.push(callback(this[i]));
  }
  return newArray;
};

var new_s = s.myMap(function(item){
  return item * 2;
});
