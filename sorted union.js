function uniteUnique(...args) {
  let arr = [].concat(...args)
  let result = [];

  arr.map((elem) => {
    if (!result.includes(elem)) {
      result.push(elem);
    }
  });
console.log(result)
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
