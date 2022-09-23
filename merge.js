function merge(arr1, arr2) {
  let sorted = [];
  let len = 0;
  let idx1 = 0;
  let idx2 = 0;

  while(idx1 < arr1.length && idx2 < arr2.length){

    if(arr1[idx1] < arr2[idx2]){
      sorted.push(arr1[idx1]);
      idx1++;
    }else{
      sorted.push(arr2[idx2]);
      idx2++;
    }
  }

  if(idx1 === arr1.length){
    debugger;
    sorted.push(...arr2.slice(idx2, arr2.length))
    debugger;
  }else if(idx2 === arr2.length){
    debugger;
    sorted.push(...arr1.slice(idx1, arr1.length))
  }
  console.log("SORTED, ", sorted);
  return sorted;
}

function mergeSort() {}

module.exports = { merge, mergeSort};