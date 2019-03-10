function myReplace(str, before, after) {
  let result = '';
  let newAfter = '';
  if (before[0] === /[A-Z]/) {
    newAfter = after.replace(after[0], after[0].toUpperCase());
  }
  
  // result = str.split(before).join(after)
  
  result = str.replace(before, after)



  return result;
}














// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); //"A quick brown fox leaped over the lazy dog
// myReplace("Let us go to the store", "store", "mall") // "Let us go to the mall"
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") // "He is Sitting on the couch"
// myReplace("This has a spellngi error", "spellngi", "spelling") // "This has a spelling error"
// myReplace("His name is Tom", "Tom", "john") // "His name is John"
// myReplace("Let us get back to more Coding", "Coding", "algorithms") // "Let us get back to more Algorithms"
