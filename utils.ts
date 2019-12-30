export function randomArray(size: number, min: number = 0, max: number = 100): number[] {
  return Array(size).fill(0).map(() => Math.floor(Math.random() * (max - min + 1)) + min)
}
