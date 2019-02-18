// NOT TECHNICALLY AN ALGORITHM BUT STILL PART OF MY LEARNING PROCESS
// I was stuck on this for about an hour trying out various things
// it turned out I wasn't passing the right args into splice
// and that I was trying to return the result of the splice, not the remainder after the splice

var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (arr, bookName) {
  let result = [...arr];
  result.push(bookName);
  return result;
  // Add your code above this line
}

function remove (books, bookName) {
  let result = [...books];
  if (result.indexOf(bookName) >= 0) {
    let i = result.indexOf(bookName);
    result.splice(i, 1);
    return result;
    // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
