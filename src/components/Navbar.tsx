import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function Navbar() {
  const { favorites } = useFavorites();

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 shadow-xl sticky top-0 z-50 border-b-4 border-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-white tracking-tight">İş İlanları</span>
              <span className="text-xs text-blue-100 font-medium">Kariyerinizi Keşfedin</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/"
              className="px-5 py-2.5 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 flex items-center space-x-2 group"
            >
              <span>Ana Sayfa</span>
            </Link>

            <Link
              to="/favorites"
              className="px-5 py-2.5 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 flex items-center space-x-2 group relative"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Favoriler</span>

              {/* 🔥 DİNAMİK FAVORİ SAYISI */}
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
