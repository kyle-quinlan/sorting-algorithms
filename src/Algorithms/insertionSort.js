export const insertionSort = (array) => {
  const arr = array;
  const n = arr.length;

  const animations = [];

  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      animations.push([j, j + 1, "ci"]);
      animations.push([j, i, "ci"]);
      animations.push([j, j + 1, "co"]);
      animations.push([j, j + 1, "s"]);
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  animations.push([0, arr.length - 1, "co"]);
  return animations;
};
