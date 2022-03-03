// PSEODO CODE
// get the most digists numbers(k)
// loop over the array k times
  // creat an array with indices from 0 to 9 in each index put an array "indics buckets";
  // with each loop for each number get the digit form right direction
  // put the number in the array of the index of digit
  // concat the arrays in indices buckets
// return the array.

// BIG O NOTATION
// O(n*logn)

// some utils functions
function getDigit(num, i) { 
  return Math.floor(Math.abs(num) / 10**i) % 10;
}

function digitsCount(num){ 
  return  Math.log(num) * Math.LOG10E + 1 | 0;
}

function getMaxDigit(arr) {
  let max = -Infinity;
  arr.forEach(ele => max = Math.max(max, ele))
  return max
}

function radixSort(arr) {
  const k = digitsCount(getMaxDigit(arr));
  for(let j = 0; j<= k; j++){
    const indicesBucket = Array.from({length: 10}, () => []);
    for(let i = 0; i < arr.length; i++){
      indicesBucket[getDigit(arr[i], j)].push(arr[i])
    }
    arr = [].concat(...indicesBucket)
  }
  return arr
}
console.log(radixSort([10, 6, 4, 9, 20, 89, 12, 32]))