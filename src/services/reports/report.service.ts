import { Report } from '@/models/Report.model'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'

const supabase = createBrowserSupabaseClient()

class ReportService {

  async getReports(from: string, until: string): Promise<Report[]> {
    const { data } = await supabase
      .from('reports')
      .select()
      .gt('created_at', from)
      .lt('created_at', until)
      
    return data as Report[] ?? []
  }

  async createReport(activities: Report['activities']) {
    try {

      const { data } = await supabase.from('reports')
        .select()
        .gt('created_at', new Date().toISOString())
        
      if (data?.length) {
        throw new Error('You have actually a report today')
      }

      const { data: report, error } = await supabase
        .from('reports')
        .insert({ activities })
        .select()
      
      if (error) {
        throw new Error(error.message)
      }

      return report as unknown as Report

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
