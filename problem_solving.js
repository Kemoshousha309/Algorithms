// PROBLEM SOLVING
const utils = require("./utils.js");

// write a function that indicates the anagrams
function isAnagram(str1, str2){
  // using frequency counter approach
  if(str1.length !== str2.length) return false
  const freq1 = {};
  const freq2 = {};
  for(let i=0; i < str1.length; i ++) {
    freq1[str1[i]] = ++freq1[str1[i]] || 1
    freq2[str2[i]] = ++freq2[str2[i]] || 1
  }
  Object.keys(freq1).forEach(char => {
    if(freq1[char] !== freq2[char]) return false
  })
  return true;
}
// console.log(isAnagram("kemo", "omekd"))



// Get the zeroSum form the sorted array
// [-4, -2, -1, 0, 1, 2, 3, 5]
function zeroSum(arr) {
  // using multi pointer approach
  let left = 0;
  let right = arr.length-1;
  let sum;
  while(left < right){
    sum = arr[left] + arr[right]; 
    if(sum > 0){
      right --;
    }else if(sum < 0){
      left ++;
    }else{
      return [arr[left], arr[right]]
    }
  }
  return null;
}
// console.log(zeroSum([-4, -2, -1, 0, 1, 2, 3, 5]))

// count unique values in (sorted array)
// [1, 2, 2, 2, 3, 3, 5, 6, 6, 7, 7, 8] => [1, 2, 3, 5, 6, 7, 8]
function uniqueValues(arr){
  // we can use frequency counter but I will use MULTI POINTERS
  let uniqueIndex = 0;
  for(let i=1; i < arr.length; i++) {
    if(arr[i] > arr[uniqueIndex]){
      uniqueIndex++;
      if(i !== uniqueIndex){
        utils.swap(arr, i, uniqueIndex);
      }
    }
  }
  return arr.slice(0, uniqueIndex+1)
}


console.log(uniqueValues([1, 2, 2, 2, 3, 3, 5, 6, 6, 7, 7, 8]))

// get the max sum form array sequence
function maxSum (arr, k) {
  // appley slidding window
  let start = 0;
  let end = k-1;
  let sum = 0;
  for(let i=start; i <= end; i ++){
    sum += arr[i] // initial sum;
  }

  let max = {
    sum,
    start,
    end
  };
  while(end < arr.length){
    sum += arr[end++] - arr[start]
    start++;
    if(sum > max.sum){
      max.sum = sum;
      max.start = start;
      max.end = end;
    }
  }
  return max
}

// console.log(maxSum([2, 6, 2, 3, 7, 8, 2, 7, 1, 4], 3))