import type { Job, JobApiResponse } from "../types/job";

const BASE_URL = "https://remotive.com/api/remote-jobs";

export async function getJobs(): Promise<Job[]> {
  const res = await fetch(BASE_URL);
  const data = await res.json();

  return data.jobs.map((job: JobApiResponse) => ({
    slug: job.slug,
    title: job.title,
    company: job.company_name,
    location: job.location,
    remote: job.remote,
    description: job.description,
    createdAt: job.created_at,
  }));
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  const jobs = await getJobs();
  return jobs.find((job) => job.slug === slug) ?? null;
}
