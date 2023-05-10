import { getDates, isWorkday, toISOString } from '@/utils/getWeekDates'
import { CreateReport, UpdateReport } from '@/models/Report'
import { Database } from '@/models/supabase'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import dayjs from 'dayjs'
import { Profile } from '@/models/Profile'

const supabase = createBrowserSupabaseClient<Database>()

class ReportService {

  async getReports() {

    const { startOfWeek, endOfWeek } = getDates()
    const auth = await supabase.auth.getUser()
    
    const { data } = await supabase
      .from('reports')
      .select()
      .gt('created_at', toISOString(startOfWeek))
      .lt('created_at', toISOString(endOfWeek))
      .eq('user_id', auth.data.user?.id)
      .order('created_at', { ascending: true })

    return data ?? []
  }

  async createReport(report: CreateReport) {
    try {
      const restDay = isWorkday(report?.created_at ?? toISOString(dayjs()))

      if (restDay) {
        throw new Error('Today is not a workday')
      }

      const auth = await supabase.auth.getUser()

      if (!report?.created_at) {
        const reportToFind = await supabase.from('reports')
          .select()
          .gt('created_at', dayjs().hour(0).minute(0).second(0))
          .lt('created_at', dayjs().add(1, 'day'))
          .eq('user_id', auth.data.user?.id)

        if (reportToFind.data?.length) {
          throw new Error('You have already made a report today.')
        }
      }

      const { data, error } = await supabase
        .from('reports')
        .insert({...report, user_id: auth.data.user?.id })
        .select()

      if (error) {
        throw new Error(error.message)
      }

      return data[0]

    } catch (err) {
      if (err instanceof Error)
        throw new Error(err.message)
    }
  }

  async editReport(report: UpdateReport) {
    try {

      const { data, error } = await supabase
        .from('reports')
        .update(report)
        .eq('id', report.id)
        .select()

      if (error) {
        throw new Error(error.message)
      }

      return data[0]

    } catch (err) {
      if (err instanceof Error)
        throw new Error(err.message)
    }
  }

  async findReportByUserId(id: Profile['id']) {

    const { startOfWeek, endOfWeek } = getDates()

    const { data } = await supabase
      .from('reports')
      .select()
      .gt('created_at', toISOString(startOfWeek))
      .lt('created_at', toISOString(endOfWeek))
      .eq('user_id', id)
      .order('created_at', { ascending: true })

    return data
  }
}

export const reportService = new ReportService()
