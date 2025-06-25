export interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export interface PageProps {
  params: { [key: string]: string };
  searchParams: SearchParams;
}

export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  message: string;
  service?: string;
}