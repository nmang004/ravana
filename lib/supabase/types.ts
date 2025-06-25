export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  service?: string;
  created_at?: string;
}

export interface ProjectInquiry {
  id?: string;
  name: string;
  email: string;
  company?: string;
  project_type?: string;
  budget_range?: string;
  timeline?: string;
  description?: string;
  created_at?: string;
}