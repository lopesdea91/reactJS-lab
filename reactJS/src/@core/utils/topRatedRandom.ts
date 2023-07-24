import getIndex from './getIndex'

/** get array with 5 unique numbers */
export default function topRatedRandom() {
  const max = 5
  const indexList: number[] = []

  for (let i = 0; indexList.length < max; i++) {
    indexList.push(getIndex(indexList))
  }
  return indexList
}