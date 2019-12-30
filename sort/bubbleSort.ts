import { randomArray } from "../utils";

function bubbleSort(arr: number[]) {
  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - j - 1; i++) {
      if (arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
      }
    }

    console.log(arr.join(', '))
  }
}

const arr = randomArray(10)
console.log(arr.join(', '))

bubbleSort(arr)
console.log(arr.join(', '))