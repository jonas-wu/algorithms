import { randomArray } from "../utils";

function quickSort(arr: number[], left: number, right: number): void {
  if (left >= right) return;

  let index = left + 1
  for (let i = left + 1; i <= right; i++) {
    if (arr[i] < arr[left]) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }
  [arr[left], arr[index-1]] = [arr[index-1], arr[left]];
  quickSort(arr, left, index - 2)
  quickSort(arr, index, right)
}


const arr = randomArray(10)

console.log(arr.join(', '))

quickSort(arr, 0, arr.length - 1)

console.log(arr.join(', '))