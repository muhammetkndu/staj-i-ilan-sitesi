import { useEffect, useState } from "react";
import { getJobBySlug } from "../services/jobService";
import type { Job } from "../types/job";

export function useJobDetail(slug?: string) {
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      setError("Geçersiz ilan");
      return;
    }

    const safeSlug = slug; 

    async function fetchJob() {
      try {
        const data = await getJobBySlug(safeSlug);
        setJob(data);
      } catch {
        setError("İlan yüklenirken hata oluştu");
      } finally {
        setLoading(false);
      }
    }

    fetchJob();
  }, [slug]);

  return { job, loading, error };
}
