import { Report } from '@/models/Report'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import dayjs from 'dayjs'

const supabase = createBrowserSupabaseClient()

class ReportService {

  async getReports(from: string, until: string): Promise<Report[]> {
    const { data } = await supabase
      .from('reports')
      .select()
      .gt('created_at', from)
      .lt('created_at', until)

    console.log(from)

    return data as Report[] ?? []
  }

  async createReport(report: Partial<Report>) {
    try {

      if (!report?.created_at) {
        const { data } = await supabase.from('reports')
        .select()
        .gt('created_at', dayjs().hour(0).minute(0).second(0))
        .lt('created_at', dayjs().add(1, 'day'))

        if (data?.length) {
          throw new Error('You have actually a report today')
        }
      } 

      const { data: savedReport, error } = await supabase
        .from('reports')
        .insert(report)
        .select()
      
      if (error) {
        throw new Error(error.message)
      }

      return savedReport as unknown as Report

    } catch (err) {
      if (err instanceof Error)
        throw new Error(err.message)
    }
  }

  async editReport(report: Partial<Report>) {
    try {
      const { data, error } = await supabase
        .from('reports')
        .update(report)
        .eq('id', report.id)
        .select()
        
      if (error) {
        throw new Error(error.message)
      }

      return data[0] as unknown as Report

    } catch (err) {
      if (err instanceof Error)
      throw new Error(err.message)
    }
  }
}

export const reportService = new ReportService()
