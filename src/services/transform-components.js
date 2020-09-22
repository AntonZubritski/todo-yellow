const _transformSpeed = (distance, time) => {
  const km = distance / 1000
  const h = time / 60
  return Math.trunc((km / h) * 100) / 100
}
const _transformDate = (created) => {
  const day = new Date(created).toLocaleString('en', { day: '2-digit' })
  const month = new Date(created).toLocaleString('en', { month: '2-digit' })
  const year = new Date(created).getFullYear()
  return `${day}.${month}.${year}`
}
export {_transformSpeed, _transformDate}