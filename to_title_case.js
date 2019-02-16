function titleCase(str) {

  let lc = str.toLowerCase();

  let sentence = lc.split(" ");

  for (let i = 0; i < sentence.length; i++) {
    let firstLetter = sentence[i].match(/./);
    let end = sentence[i].replace(/(.)/, convert(firstLetter));
    return end;
  }


  function convert(a) {
    return a[0].toUpperCase();
  }

titleCase("I'm a little tea pot");
