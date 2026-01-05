import { Link } from "react-router-dom";

export default function Navbar(){
    return(
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

                    {/* Search Bar */}
                    <div className="hidden lg:flex flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input 
                                type="text" 
                                placeholder="İş, şirket veya pozisyon ara..." 
                                className="w-full pl-12 pr-4 py-3 bg-white/95 backdrop-blur-sm rounded-xl border-2 border-white/20 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-800 placeholder-gray-500 shadow-lg transition-all duration-200"
                            />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-2">
                        <Link 
                            to="/" 
                            className="px-5 py-2.5 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 flex items-center space-x-2 group"
                        >
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
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
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">3</span>
                        </Link>
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden md:flex items-center space-x-3 ml-4">
                        <button className="px-4 py-2.5 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center space-x-2 border border-white/30">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <button className="px-6 py-2.5 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span>Giriş Yap</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="text-white hover:bg-white/20 p-2 rounded-lg focus:outline-none transition-colors">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}