export const selectionSort = (array) => {
  const N = array.length;
  const arr = array;

  const animations = [];

  for (var i = 0; i < N; i++) {
    //const animation = {};
    var min = arr[i];
    var min_index = i;
    for (var j = i + 1; j < N; j++) {
      animations.push([min_index, j, "ci"]);
      animations.push([min_index, j, "co"]);
      if (arr[j] < min) {
        min_index = j;
        min = arr[j];
      }
    }

    arr[min_index] = arr[i];
    arr[i] = min;
    // console.log(
    //   `Swapping min_index ${min_index} value: ${arr[min_index]} with i index ${i} value ${arr[i]}`
    // );
    animations.push([min_index, i, "s"]);
  }

  //console.log(arr);
  //console.log(animations);
  return animations;
};
