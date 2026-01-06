import type { Job } from "../types/job";

export const filterJobs = (
  jobs: Job[],
  search: string,
  onlyRemote: boolean
): Job[] => {
  return jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchesRemote = onlyRemote ? job.remote : true;

    return matchesSearch && matchesRemote;
  });
};
