const {swap} = require("../utils.js");


// PSEUDO CODE
// consider your first elelment the sorted portion
// find the smallest value in the unsorted portion
// insert it in the end of the sorted portion

// worst and best o(n^2)

//[1, 3, 23, 2, 6, 4, 12, 32]

function selectionSort(arr) {
  let sortedIdx = 0;
  let smallestIdx;
  for(let i = 0; i < arr.length; i++){
    smallestIdx = sortedIdx;
    for(let j = sortedIdx+1; j < arr.length; j++) {
      if(arr[j] < arr[smallestIdx]){
        smallestIdx = j;
      }
    }
    if(sortedIdx !== smallestIdx) {
      swap(arr, sortedIdx, smallestIdx);
    }
    sortedIdx++;
  }
  return arr
}

console.log(selectionSort([1, 3, 23, 2, 6, 4, 12, 32]))