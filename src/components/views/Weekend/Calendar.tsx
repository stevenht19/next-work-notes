import React from 'react'
import ActivityCalendar from 'react-activity-calendar'
import dayjs from 'dayjs'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { useUserActivity } from './hooks/useUserActivity'
import 'react-tooltip/dist/react-tooltip.css'

export const Calendar = () => {

  const [activity, loading] = useUserActivity()

  if (loading) {
    return (
      <div className='h-[11.45rem]' />
    )
  }

  return (
    <section className='pb-6'>
      <ActivityCalendar
        colorScheme={'dark'}
        data={activity}
        labels={{
          legend: {
            less: 'Less',
            more: 'More'
          },
          months: [
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
          ],
          totalCount: '{{count}} activities during the year',
          weekdays: ['Sun', 'Mon', 'Tue', 'Wed', "Thu", 'Fri', 'Sat']
        }}
        renderBlock={(block, activity) =>
          React.cloneElement(block, {
            'data-tooltip-id': 'react-tooltip',
            'data-tooltip-html': `${activity.count} ${activity.count === 1 ? 'activity' : 'activities'} on ${dayjs(activity.date).format('DD/MM/YYYY')}`,
          })
        }
      />
      <ReactTooltip id='react-tooltip' />
    </section>
  )
}


