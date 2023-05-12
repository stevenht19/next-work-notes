import { Report } from '@/models/Report'
import { ColorScale } from 'react-activity-calendar'

export const colors: ColorScale = ['#202022', '#52555A', '#7D7F83', '#ABADAF', '#FFFFFF']

export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

export const getDaysOfTheYear = () => {
  
  const startDate = new Date(new Date().getFullYear(), 0, 1)
  const endDate = new Date(new Date().getFullYear(), 11, 31)
  const dates = []

  for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    const day = d.getDate();
    const month = d.getMonth() + 1;

    const formattedDate = `${d.getFullYear()}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    dates.push(formattedDate)
  }

  return dates
}

export const getActivitiesCount = (reports: Report[], count = 0) => {
  const activitiesCount = reports.reduce((acc, value) => {
    return acc + value.activities.length
  }, count)

  return activitiesCount
}