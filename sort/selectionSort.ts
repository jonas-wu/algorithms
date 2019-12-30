import { randomArray } from "../utils";

function selectionSort(arr: number[]): void {
  for (let j = 0; j < arr.length - 1; j++) {
    let minIndex = j
    for (let i = minIndex + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }

    [arr[j], arr[minIndex]] = [arr[minIndex], arr[j]]

    console.log(arr.join(', '))
  }
}

const arr = randomArray(10)
console.log(arr.join(', '))

selectionSort(arr)
console.log(arr.join(', '))