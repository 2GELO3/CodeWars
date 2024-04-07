// Задача №83


const index = (arr, n) => {

  const el = arr[n]

  if (!el) return -1
  return el ** n
}