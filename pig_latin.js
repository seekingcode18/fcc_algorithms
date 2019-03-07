function translatePigLatin(str) {
  // what are vowels
  const vowels = "aeiou";

  // if begin w vowel, str += 'way'

  if (vowels.includes(str[0])) {
    str += "way"
      return str;
  } else {

  // else move 1st ch to end and + ay
  let result = "";

  result = str.substring(1)
  result += str[0] + 'ay'
  console.log(result)
  return result;
  }
  
}

translatePigLatin("consonant");
