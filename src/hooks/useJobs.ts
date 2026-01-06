import { useEffect, useState } from "react";
import { getJobs } from "../services/jobService";
import type { Job } from "../types/job";

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [onlyRemote, setOnlyRemote] = useState(false);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const data = await getJobs();

        let filtered = data;

        if (search) {
          filtered = filtered.filter(
            (job) =>
              job.title.toLowerCase().includes(search.toLowerCase()) ||
              job.company.toLowerCase().includes(search.toLowerCase())
          );
        }

        if (onlyRemote) {
          filtered = filtered.filter((job) => job.remote);
        }

        setJobs(filtered);
      } catch {
        setError("İlanlar yüklenirken hata oluştu");
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, [search, onlyRemote]);

  return {
    jobs,
    loading,
    error,
    search,
    setSearch,
    onlyRemote,
    setOnlyRemote,
  };
}
