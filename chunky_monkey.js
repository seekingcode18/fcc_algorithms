function chunkArrayInGroups(arr, size) {
  // 1. find out size of new arrays
  let newLength = arr.length / size;

  // console.log(arr.length) // 4

  // 2. split arr every s elements
  let split = [];
  for (let i = 0; i < arr.length; i += size) {
    split.push(arr.slice(i, 0, (i+size)));
  }  

  // 3. push new arrays into outside array & return
  console.log(split)
  return split;
  
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

