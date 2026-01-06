import { Link } from "react-router-dom";
import { useJobs } from "../hooks/useJobs";

export default function Jobs() {
  const {
    jobs,
    loading,
    error,
    search,
    setSearch,
    onlyRemote,
    setOnlyRemote,
  } = useJobs();

  if (loading) {
    return <div className="p-10 text-center">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="p-10 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            İş İlanları
          </h1>
          <p className="text-gray-600 text-lg">
            Hayalinizdeki işi bulun
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">

          {/* JOB LIST */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.length === 0 && (
                <p className="text-gray-500">Sonuç bulunamadı</p>
              )}

              {jobs.map((job) => (
                <Link
                  to={`/jobs/${job.slug}`}
                  state={{job}}
                  key={job.id}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all h-full flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">
                      {job.title}
                    </h3>

                    <p className="text-gray-600 mb-2">{job.company}</p>

                    <p className="text-sm text-gray-500 mb-2">
                      📍 {job.location}
                    </p>

                    {job.remote && (
                      <span className="inline-block text-xs bg-green-100 text-green-700 px-2 py-1 rounded mb-3">
                        Remote
                      </span>
                    )}

                    <p className="text-sm text-gray-500 line-clamp-3 mb-4">
                      {job.description}
                    </p>

                    <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Detaylara Git
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:w-80">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">

              <h2 className="text-xl font-bold mb-6">Filtreler</h2>

              {/* SEARCH */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Ara
                </label>
                <input
                  type="text"
                  placeholder="Pozisyon veya şirket"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              {/* REMOTE */}
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={onlyRemote}
                  onChange={(e) => setOnlyRemote(e.target.checked)}
                />
                Sadece Remote
              </label>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
