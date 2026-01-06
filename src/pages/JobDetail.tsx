import { useLocation } from "react-router-dom";
import type { Job } from "../types/job";

export default function JobDetail() {
  const location = useLocation();
  const job = location.state?.job as Job | undefined;

  if (!job) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500">
        İlan bulunamadı
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* HEADER */}
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
            <p className="text-gray-500 mt-1">{job.company}</p>
          </div>

          {job.remote && (
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-green-700 bg-green-100 rounded-full w-fit">
              🌍 Remote
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            📍 <span>{job.location}</span>
          </div>
          {job.createdAt && (
            <div className="flex items-center gap-2">
              🗓 <span>{job.createdAt}</span>
            </div>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="bg-white rounded-2xl shadow p-6 mt-6">
        <h2 className="text-lg font-semibold mb-4">İş Tanımı</h2>

        <div
          className="prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: job.description }}
        />
      </div>

      {/* ACTIONS */}
      <div className="flex gap-4 mt-6">
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition">
          Başvur
        </button>

        <button className="flex-1 border border-gray-300 hover:bg-gray-100 font-medium py-3 rounded-xl transition">
          Favorilere Ekle ⭐
        </button>
      </div>
    </div>
  );
}
