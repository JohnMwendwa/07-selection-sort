/*
    -Create a function callled selectionSort that accepts an array
    -Store the first element as the smallest value you've seen so far
    -Compare this item to the next item in array until you find a smaller number
    -If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array
    -If the "minimum" is not the value(index) you initiallly began with, swap the two values
    -Repeat this with the next element until the array is sorted
*/

// my solution O(N^2)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (smallest > arr[j]) {
        smallest = arr[j];
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log(selectionSort([29, 10, 14, 30, 37, 14, 19]));
console.log(selectionSort([70, 2, 89, 5, 1, 8, 63, 11]));
console.log(selectionSort([1, 2, 3, 4, 5, 6]));
