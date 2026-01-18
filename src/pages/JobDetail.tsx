import { useLocation } from "react-router-dom";
import type { Job } from "../types/job";
import { useFavorites } from "../context/FavoritesContext";

export default function JobDetail() {
  const location = useLocation();
  const job = location.state?.job as Job | undefined;
  const { toggleFavorite, isFavorite } = useFavorites();

  if (!job) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500">
        İlan bulunamadı
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-purple-50 py-12">
      <div className="max-w-5xl mx-auto px-4">

        {/* HERO HEADER */}
        <div className="relative bg-white/80 backdrop-blur rounded-3xl shadow-xl p-8 mb-8">

          {/* FAVORITE */}
          <button
            onClick={() => toggleFavorite(job)}
            className={`absolute top-6 right-6 text-2xl transition ${
              isFavorite(job.id)
                ? "text-red-500 scale-110"
                : "text-gray-400 hover:text-red-500"
            }`}
          >
            ♥
          </button>

          <div className="flex flex-col md:flex-row md:items-center gap-6">

            {/* LOGO */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              {job.company.charAt(0)}
            </div>

            {/* INFO */}
            <div className="flex-1">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-1">
                {job.title}
              </h1>
              <p className="text-gray-600 text-lg">
                {job.company}
              </p>

              <div className="flex flex-wrap gap-3 mt-4 text-sm">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                  📍 {job.location}
                </span>

                {job.remote && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                    🌍 Remote
                  </span>
                )}

                {job.createdAt && (
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                    🗓 {job.createdAt}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-lg p-8 mb-32">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            📝 İş Tanımı
          </h2>

          <div
            className="prose prose-blue max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
        </div>

        {/* STICKY ACTION BAR */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t shadow-2xl">
          <div className="max-w-5xl mx-auto px-4 py-4 flex gap-4">

            <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white font-bold py-3 rounded-xl transition text-lg">
              🚀 Başvur
            </button>

            <button
              onClick={() => toggleFavorite(job)}
              className={`px-6 py-3 rounded-xl font-semibold transition ${
                isFavorite(job.id)
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-red-100"
              }`}
            >
              {isFavorite(job.id)
                ? "❤️ Favorilerden Çıkar"
                : "🤍 Favorilere Ekle"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
