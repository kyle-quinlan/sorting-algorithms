export const selectionSort = (array) => {
  const arrayLength = array.length;
  const arr = array;

  for (var i = 0; i < arrayLength - 1; i++) {
    var min_index = i;
    for (var j = i + 1; j < arrayLength; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    var temp = arr[min_index];
    arr[min_index] = arr[i];
    arr[i] = temp;
  }

  return arr;
};
