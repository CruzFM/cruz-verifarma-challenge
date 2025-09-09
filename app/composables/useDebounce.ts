//Since this may be a commonly used utility, I'm placing it in a composable.
export function useDebounce<T extends (...args: any[]) => void> (fn: T, delay: number) {
  let timer: ReturnType<typeof setTimeout>

  //Basic debounce function: clears the timer on each call, and sets a new one.
  const debouncedFn = (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }

  //cancels the debounce, clearing the timer.
  const cancel = () => {
    clearTimeout(timer)
  }

  //immediately invokes the debounced function, clearing the timer.
  const flush =(...args: Parameters<T>) => {
    clearTimeout(timer)
    fn(...args)
  }

  return { debouncedFn, cancel, flush }
}