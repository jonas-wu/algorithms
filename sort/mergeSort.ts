import { randomArray } from "../utils";

function merge(arr: number[]): number[] {
  // console.log('merge', arr.join(', '))
  if (arr.length < 2) return arr;

  const middle = arr.length / 2
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return mergeSort(merge(left), merge(right))
}

function mergeSort(left: number[], right: number[]): number[] {
  // console.log('mergeSort', left.join(', '), right.join(', '))
  const result:number[] = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) result.push(left.shift() as number);
    else result.push(right.shift() as number);
  }

  result.push(...left, ...right);

  return result;
}

const arr = randomArray(10)

console.log(arr.join(', '))

const arr2 = merge(arr)

console.log(arr2.join(', '))