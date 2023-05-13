import React from 'react'
import ActivityCalendar from 'react-activity-calendar'
import dayjs from 'dayjs'
import { Tooltip } from 'react-tooltip'
import { useUserActivity } from './hooks/useUserActivity'
import { colors, months } from './utils'
import 'react-tooltip/dist/react-tooltip.css'
import { useReports } from '@/hooks/useReports'

export const Calendar = () => {

  const { activity } = useReports()
  const [loading] = useUserActivity()

  if (loading) {
    return (
      <div className='h-[11.45rem]' />
    )
  }

  return (
    <section className='pb-6'>
      <ActivityCalendar
        data={activity}
        colorScheme={'dark'}
        theme={{
          dark: colors
        }}
        labels={{
          legend: {
            less: 'Less',
            more: 'More'
          },
          months: months,
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
      <Tooltip id='react-tooltip' />
    </section>
  )
}


