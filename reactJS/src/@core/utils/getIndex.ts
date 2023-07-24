/** get unique numbers between 0 and 20 */
export default function getIndex(list: number[]): number {
  const i = Math.floor(Math.random() * 20)
  if (list.includes(i))
    return getIndex(list)
  return i
}