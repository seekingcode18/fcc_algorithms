function myReplace(str, before, after) {
  let result = '';
  let newAfter = '';

  if (before.substring(0,1) === before.substring(0,1).toUpperCase()) {
  newAfter = after.replace(after[0], after[0].toUpperCase());
  result = str.replace(before, newAfter);
  return result;
  }

  result = str.replace(before, after)
  
  return result;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
