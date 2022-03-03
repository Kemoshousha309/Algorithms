const utils = require("../utils.js");


// PSEUDO CODE
// pick two numbers and compare them 
// if left one is greater => swap
// do this process while looping in the arr
// if one loop is without swpas =>  WE ARE DONE 

// BIG O NOTATION
// worst O(n^2) best o(n)




function bubbleSort(arr){
  let swaps = true;
  while(swaps) {
    swaps = false;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > arr[i+1]){
        utils.swap(arr, i, i+1)
        swaps = true;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([1, 3, 23, 2, 6, 4, 12, 32] ))