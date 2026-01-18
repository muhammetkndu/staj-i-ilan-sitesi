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
    return <div className="p-20 text-center text-lg">⏳ Yükleniyor...</div>;
  }

  if (error) {
    return <div className="p-20 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-14 text-center">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Staj & İş İlanları
          </h1>
          <p className="text-gray-600 text-lg">
            Kariyerine yön verecek fırsatları keşfet
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-10">

          {/* JOB LIST */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {jobs.length === 0 && (
              <p className="text-gray-500">Sonuç bulunamadı</p>
            )}

            {jobs.map((job) => (
              <Link
                key={job.id}
                to={`/jobs/${job.slug}`}
                state={{ job }}
                className="group relative"
              >
                {/* GLOW */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 blur transition" />

                <div className="relative bg-white/80 backdrop-blur rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">

                  {/* TOP */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {/* LOGO */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold text-lg">
                        {job.company.charAt(0)}
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition">
                          {job.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {job.company}
                        </p>
                      </div>
                    </div>

                    {/* FAVORITE */}
                    <span className="text-gray-400 group-hover:text-red-500 transition text-xl">
                      ♥
                    </span>
                  </div>

                  {/* INFO */}
                  <div className="flex flex-wrap gap-2 mb-4 text-xs">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                      📍 {job.location}
                    </span>

                    {job.remote && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                        🌍 Remote
                      </span>
                    )}

                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                      🆕 Yeni
                    </span>
                  </div>

                  {/* DESC */}
                  <p className="text-sm text-gray-600 line-clamp-3 mb-6">
                    {job.description}
                  </p>

                  {/* FOOTER */}
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      Detayları incele
                    </span>
                    <span className="text-blue-600 font-bold group-hover:translate-x-1 transition">
                      →
                    </span>
                  </div>

                </div>
              </Link>
            ))}
          </div>

          {/* SIDEBAR */}
          <div className="xl:w-80">
            <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl p-6 sticky top-24">

              <h2 className="text-xl font-bold mb-6">
                🎯 Filtreler
              </h2>

              {/* SEARCH */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Ara
                </label>
                <input
                  type="text"
                  placeholder="Pozisyon, şirket..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* REMOTE */}
              <label className="flex items-center gap-3 text-sm font-medium">
                <input
                  type="checkbox"
                  checked={onlyRemote}
                  onChange={(e) => setOnlyRemote(e.target.checked)}
                  className="w-4 h-4"
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
