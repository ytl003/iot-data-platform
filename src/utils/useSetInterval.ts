export function useSetInterval(fun: Function, ms = 1000) {
  let time: NodeJS.Timeout
  onMounted(() => {
    fun()
    time = setInterval(() => {
      fun()
    }, ms)
  })
  onUnmounted(() => {
    clearInterval(time)
  })
}
