function order(words){
  // split into arr
  let arr = words.split(' ');

  let result = new Array(arr.length);
  
  // loop through arr, find \d in arr & set to position, and insert arr[i] into result at \d position
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/\d/)) {
      let wheresTheNumber = arr[i].search(/\d/);
      let position = arr[i].charAt(wheresTheNumber);
      result.splice(position-1, 1, arr[i])
    }
  }

  // convert result to arr
  
  return result.join(' ');
}
