function randomArray(size, min = 0, max = 100) {
  return Array(size).fill(0).map(() => Math.floor(Math.random() * (max - min + 1)) + min)
}

module.exports = {
  randomArray,
}