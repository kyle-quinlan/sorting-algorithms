// This file uses an iterative version of merge sort. This is based off of https://www.geeksforgeeks.org/iterative-merge-sort/
export const mergeSort = (array) => {
  const n = array.length;

  for (
    let currentSize = 1;
    currentSize <= n - 1;
    currentSize = currentSize * 2
  ) {
    for (
      let leftStart = 0;
      leftStart < n - 1;
      leftStart = leftStart + currentSize * 2
    ) {
      const mid = Math.min(leftStart + currentSize - 1, n - 1);
      const rightEnd = Math.min(leftStart + currentSize * 2 - 1, n - 1);

      merge(array, leftStart, mid, rightEnd);
    }
  }

  return array;
};

const merge = (array, left, mid, right) => {
  const n1 = mid - left + 1;
  const n2 = right - mid;

  const larray = [];
  const rarray = [];

  for (let i = 0; i < n1; i++) {
    larray[i] = array[left + i];
  }
  for (let j = 0; j < n2; j++) {
    rarray[j] = array[mid + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = left;

  while (i < n1 && j < n2) {
    if (larray[i] <= rarray[j]) {
      array[k] = larray[i];
      i++;
    } else {
      array[k] = rarray[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    array[k] = larray[i];
    i++;
    k++;
  }

  while (j < n2) {
    array[k] = rarray[j];
    j++;
    k++;
  }
};
