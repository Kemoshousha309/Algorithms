// PSEDO CODE
// consider the first element is the sorted portion of arr
// go through the rest of unsorted arr
// pick each element and INSERT  it in the correct spot

// BIG O NOTAION
//  best O(n) worst O(n^2)

//[2, 3, 5, 6, 23, 4, 12, 32]

function insertionSort(arr) {
  for(let i = 1; i<arr.length; i++){
    const value = arr[i];
     for(var j = i-1; j <= 0; j --){
       if(arr[j] > value) {
        arr[j+1] = arr[j]
       }else break;
      }
      arr[j+1] = value
  }
  return arr;
}

console.length(insertionSort([1, 3, 23, 2, 6, 4, 12, 32]))