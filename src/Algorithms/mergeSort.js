// This file is only slightly modified from original github repo:
// https://github.com/clementmihailescu/Sorting-Visualizer-Tutorial/blob/master/src/sortingAlgorithms/sortingAlgorithms.js

export const mergeSort = (array) => {
  const n = array.length;

  const fakeArray = array.slice();

  const animations = [];

  sort(array, 0, n - 1, fakeArray, animations);

  return animations;
};

const sort = (array, start, end, fakeArray, animations) => {
  if (start === end) return;
  const middle = Math.floor((start + end) / 2);
  sort(fakeArray, start, middle, array, animations);
  sort(fakeArray, middle + 1, end, array, animations);
  merge(array, start, middle, end, animations, fakeArray);
};

const merge = (array, left, mid, right, animations, fakeArray) => {
  // const n1 = mid - left + 1;
  // const n2 = right - mid;

  // const larray = [];
  // const rarray = [];

  // for (let i = 0; i < n1; i++) {
  //   larray[i] = array[left + i];
  // }
  // for (let j = 0; j < n2; j++) {
  //   rarray[j] = array[mid + 1 + j];
  // }

  let i = left;
  let j = mid + 1;
  let k = left;

  while (i <= mid && j <= right) {
    animations.push([i, j, "ci"]);
    animations.push([i, j, "co"]);

    if (fakeArray[i] <= fakeArray[j]) {
      animations.push([k, fakeArray[i], "sh"]);
      array[k++] = fakeArray[i++];
    } else {
      animations.push([k, fakeArray[j], "sh"]);
      array[k++] = fakeArray[j++];
    }
  }

  while (i <= mid) {
    animations.push([i, i, "ci"]);
    animations.push([i, i, "co"]);
    animations.push([k, fakeArray[i], "sh"]);
    array[k++] = fakeArray[i++];
  }

  while (j <= right) {
    animations.push([j, j, "ci"]);
    animations.push([j, j, "co"]);
    animations.push([k, fakeArray[j], "sh"]);
    array[k++] = fakeArray[j++];
  }

  // while (i < n1 && j < n2) {
  //   if (fakeArray[i] <= fakeArray[j]) {
  //     animations.push([i, j, "ci"]);
  //     animations.push([i, j, "co"]);
  //     array[k] = larray[i];
  //     i++;
  //   } else {
  //     animations.push([i, j, "ci"]);
  //     animations.push([i, j, "co"]);
  //     array[k] = rarray[j];
  //     j++;
  //   }
  //   k++;
  // }

  // while (i < n1) {
  //   //animations.push([k, i, "s"]);
  //   array[k] = larray[i];
  //   i++;
  //   k++;
  // }

  // while (j < n2) {
  //   //animations.push([k, i, "s"]);
  //   array[k] = rarray[j];
  //   j++;
  //   k++;
  // }
};
