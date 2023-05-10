export const getDayStatus = (day: number) => {
  if (day === 6 || day === 0) {
    return {
      color: 'bg-yellow-200/20 text-yellow-200/90',
      status: 'Rest Day'
    }
  }

  return {
    color: 'bg-green-200/20 text-green-200/90',
    status: 'Workday'
  }
}