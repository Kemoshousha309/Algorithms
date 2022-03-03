
function swap(arr, index1, index2) { // not pure function
  if(index2 === index1) return 
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

module.exports = {
  swap
}
