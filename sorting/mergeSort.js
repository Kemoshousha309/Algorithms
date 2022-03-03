// PSEODO CODE 
// divide the arr into two halfs and the halfs into halfs
// until the arr length is one => which consider a sorted arr
// merge these sorted arrays up until your final arr is sorted


// merge two sorted arrays
function merge(arr1, arr2) { // O(n)
  let i = 0;
  let j = 0;
  const result = [];
  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
      result.push(arr1[i])
      i++;
    }else{
      result.push(arr2[j])
      j++;
    }
  }
  while(i < arr1.length){
    result.push(arr1[i])
    i++;
  }
  while(j < arr2.length){
    result.push(arr2[j])
    j++;
  }
  return result
}


// O(n*logn)
function mergeSort(arr) { // merge sort uses divid conquer approach
  if(arr.length === 1) return arr;
  const mid = Math.floor((arr.length)/2);
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

console.log(mergeSort([2, 3, 5, 6, 23, 4, 12, 32]))