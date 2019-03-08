function squareDigits(num) {
arr = JSON.stringify(num).split('').map(num => num * num)

squared = arr.map(num => num * num)

return Number(squared.join(''))

}


//single line version

//function squareDigits(num) {
//return Number(JSON.stringify(num).split('').map(num => num * num).join(''))
//}
