import { useFavorites } from "../context/FavoritesContext";
import type { Job } from "../types/job";

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Favori İlanlar
          </h1>

          <div className="bg-white rounded-xl shadow px-6 py-3 flex items-center gap-3">
            <span className="text-gray-600 font-medium">
              Toplam Favori
            </span>
            <span className="text-2xl font-bold text-red-600">
              {favorites.length}
            </span>
          </div>
        </div>

        {/* EMPTY STATE */}
        {favorites.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                ❤️
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Henüz favori ilanınız yok
              </h3>

              <p className="text-gray-600">
                Beğendiğiniz iş ilanlarını favorilerinize ekleyebilirsiniz.
              </p>
            </div>
          </div>
        )}

        {/* FAVORITES LIST */}
        <div className="grid grid-cols-1 gap-6">
          {favorites.map((job: Job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 border-red-100"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  {/* LOGO */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-xl">
                      {job.company.charAt(0)}
                    </span>
                  </div>

                  {/* INFO */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {job.title}
                    </h3>

                    <p className="text-gray-600 font-medium mb-2">
                      {job.company}
                    </p>

                    <div className="text-sm text-gray-500">
                      {job.location} • {job.salary}
                    </div>
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="flex flex-col items-end gap-3">
                  <button
                    onClick={() => toggleFavorite(job)}
                    className="p-2 text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 rounded-lg transition"
                    title="Favorilerden kaldır"
                  >
                    ❤️
                  </button>

                  <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                    Başvur
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
