import { Level } from 'react-activity-calendar'

export const getActivityLevel = (length: number): Level => {
  if (length === 1) {
    return 1
  }
  if (length <= 3 && length >= 2) {
    return 2
  }
  if (length <= 5 && length > 3) {
    return 3
  }
  if (length > 5) {
    return 4
  }

  return 0
}