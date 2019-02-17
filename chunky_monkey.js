function chunkArrayInGroups(arr, size) {
  // split arr every (size) elements & push new arrays into outside array & return
  let splitArr = [];
  for (let i = 0; i < arr.length; i += size) {
    splitArr.push(arr.slice(i, (i+size)));
  }  
  return splitArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
