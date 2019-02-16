function titleCase(str) {
  let lc = str.toLowerCase();
  let sentence = lc.split(" ");
  let arr = [];

  function convert(a) {
    return a[0].toUpperCase();
  }
  
  for (let i = 0; i < sentence.length; i++) {
    let firstLetter = sentence[i].match(/./);
    arr.push(sentence[i].replace(firstLetter, convert(firstLetter)));
  }

return arr.join(" ");

titleCase("I'm a little tea pot");
