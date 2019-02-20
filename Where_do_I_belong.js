function getIndexToIns(arr, num) {
    // first, sort array using comparison function
    let result = arr.sort(function(a, b) { return a - b })

    // filter to remove items < num
    let location = result.filter(i => i < num);
    
    return (location.length);

}

getIndexToIns([10, 20, 30, 40, 50], 35);

// returns 3
