const {randomArray} = require('../utils')

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i]
    let preIndex = i - 1

    while (preIndex >= 0 && arr[preIndex] > cur) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }

    arr[preIndex+1] = cur

    console.log(arr.join(', '))
  }
}

const arr = [5,4,6,3,1]
console.log(arr.join(', '))

insertionSort(arr)
console.log(arr.join(', '))