const {swap} = require("../utils")

// PSEODO CODE
// select a pivot(any element you choose "first, last, middle and so on")
// put the pivot in the right place
// take the right and the left side of the pivot and repeat what we've done

// BIG O NOTAION
// O(n*logn)

// [10, 6, 4, 9, 20, 89, 12, 32] [40, 10, 6, 4, 89, 20, 23, 12, 32]

function sortPivot(arr, start=0, end=arr.length-1){ // O(n)
  const pivot = start;
  let sortedIdx = start;
  for(let i = start+1; i <= end; i++){
     if(arr[pivot] > arr[i]){
       swap(arr, sortedIdx+1, i)
       sortedIdx ++;
     }
  }
  swap(arr, sortedIdx, pivot)
  return sortedIdx
}
console.log(sortPivot([2]))

function quickSort(arr, start=0, end=arr.length-1) {
  const pivot = sortPivot(arr, start, end);
  if(start < end) {
    quickSort(arr, start, pivot-1);
    quickSort(arr, pivot+1, end);
  }
  return arr
}

console.log(quickSort([10, 6, 4, 9, 20, 89, 12, 32]))
