export * from './dark'
export function randomExtend(minNum: number, maxNum: number) {
  if (arguments.length === 1)
    return parseInt(`${Math.random() * minNum + 1}`, 10)

  else
    return parseInt(`${Math.random() * (maxNum - minNum + 1)}${minNum}`, 10)
}
