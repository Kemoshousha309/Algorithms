// linear search with O(n)
// BINARY SEARCH O(logn)

// [-4, -2, -1, 0, 1, 2, 3, 5]

// iterative way
function binarySearch_itrative(arr, value){
  let start = 0;
  let end = arr.length-1;
  let mid;
  while(start < end){
    mid = Math.floor((start+end)/2);
    if(arr[mid] > value){
      end = mid-1;
    }else if(arr[mid] < value){
      start = mid+1;
    }else{
      return mid;
    }
  }
  return -1;
}

// recursive way
function binarySearch_recursive(arr, value, start=0, end=arr.length-1) {
  const mid = Math.floor((start+end)/2);
  if(arr[mid] === value){
    return mid;
  } else if(start >= end) {
    return -1;
  }
    
  if(arr[mid] > value){
    return binarySearch_recursive(arr, value, start, mid-1)
  }else if(arr[mid] < value){
    return binarySearch_recursive(arr, value, mid+1, end)
  }
}


// console.log(binarySearch_recursive( [-4, -2, -1, 0, 1, 2, 3, 5], 3))

// count a specific sequence in a string
// kareem shousha kar
//  i
//  j
function patternSearch(str, pattern){ 
  // multi pointer approach
  let count = 0;
  for(let i = 0; i < str.length; i++){
    let match = true;
    for(let j = 0; j < pattern.length; j++){
      match = match && pattern[j] === str[i+j]
    }
    if(match) count ++;
  }
  return count;
}

// console.log(patternSearch("ko ko len", "den"))

function sequenceSearch(str, seq){ // n*k
  // sliding window approach
  let start = 0;
  let end = seq.length;
  let count = 0;
  while(end <= str.length){ // n
    const s = str.slice(start, end)
    if(s === seq) count++; // k
    start ++;
    end ++;
  }
  return count
}



console.log(sequenceSearch("ko ko len", "len"))
