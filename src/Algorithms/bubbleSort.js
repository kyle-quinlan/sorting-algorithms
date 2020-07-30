export const bubbleSort = (array) => {
  const arr = array;
  let n = arr.length;

  const animations = [];

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      animations.push([j, j + 1, "ci"]);
      animations.push([j, j + 1, "co"]);
      if (arr[j] > arr[j + 1]) {
        // swap j and j+1
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        animations.push([j, j + 1, "s"]);
      }
    }
  }
  return animations;
};
