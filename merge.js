function merge(arr1, arr2) {
  let sorted = [];
  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < arr1.length && idx2 < arr2.length) {

    if (arr1[idx1] < arr2[idx2]) {
      sorted.push(arr1[idx1]);
      idx1++;
    } else {
      sorted.push(arr2[idx2]);
      idx2++;
    }
  }

  if (idx1 === arr1.length) {
    sorted.push(...arr2.slice(idx2, arr2.length));
  } else if (idx2 === arr2.length) {
    sorted.push(...arr1.slice(idx1, arr1.length));
  }

  return sorted;
}

/**
 * 1. divide array into two arrays
 * 2. repeat until array lengths are 0 or 1
 *
 * 3. call merge on pair of arrays
 * 4. repeat until array is returned to original size
 *
 *
*/
function mergeSort(arr) {

  function _splitArray(arr, out = []) {
    if (arr.length <= 1) {
      out.push(arr);
      return;
    }

    let middle = Math.floor(arr.length / 2);

    let arr1 = arr.slice(0, middle);
    let arr2 = arr.slice(middle);
    debugger;
    _splitArray(arr1, out);
    _splitArray(arr2, out);

    return out;
  }

  let splitArrays = _splitArray(arr);

  function _merge(splitArrays) {
    if (splitArrays.length <= 1) return splitArrays;
    let sorted = [];
    for (let i = 0; i < splitArrays.length; i += 2) {
      debugger
      sorted.push(merge(splitArrays[i], splitArrays[i + 1]));
    }
    debugger


    if (sorted.length % 2 !== 0 && sorted.length > 1) sorted.push([]);
    if (sorted.length === 1) return sorted;
    return _merge(sorted);
  }

  let sorted = _merge(splitArrays)
  return sorted[0];
}

module.exports = { merge, mergeSort };