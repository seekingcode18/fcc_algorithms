
function getFib(num) {
  if (num < 2) {
    return 1;
  } else {
    let arr = Array(num);
    arr[0] = 1;
    arr[1] = 1;
    for (let i = 2; i < arr.length; i++) {
      arr[i] = arr[i-1] + arr[i-2];
    }
    return arr.filter(n => n % 2 !== 0 && n <= num).reduce((a,b) => a+b);
  }
}



getFib(10)
