export const delay = async (min: number = 250) => {
  await new Promise(res => setTimeout(res, min))
}