import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 overflow-hidden min-h-screen flex items-center">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-full">
                        {/* Left Content */}
                        <div className="text-white mt-14">
                            <div className="inline-block px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-2">
                                <span className="text-xs font-semibold">🚀 Yeni İş Fırsatları Her Gün</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold mb-2 leading-tight">
                                Hayalinizdeki İşi
                                <span className="block text-yellow-300">Bulun ve Başlayın</span>
                            </h1>
                            <p className="text-lg text-blue-100 mb-4 leading-relaxed">
                                Binlerce iş ilanı arasından size en uygun pozisyonu bulun.
                                Kariyerinize yeni bir adım atın ve hayallerinizi gerçekleştirin.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 mb-4">
                                <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <span>İş Ara</span>
                                </button>
                                <Link to="/jobs" className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/30 transition-all duration-200 border-2 border-white/30 flex items-center justify-center space-x-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <span>Hızlı Başvur</span>
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                                <div>
                                    <p className="text-2xl font-bold mb-1">1,234+</p>
                                    <p className="text-xs text-blue-100">Aktif İlan</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold mb-1">500+</p>
                                    <p className="text-xs text-blue-100">Şirket</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold mb-1">10K+</p>
                                    <p className="text-xs text-blue-100">Başarılı Eşleşme</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Images */}
                        <div className=" -mt-5 relative w-full h-full flex items-center">
                            <div className="grid grid-cols-2 gap-4 w-full">
                                {/* Image Card 1 */}
                                <Link to="/job/1" className="block">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-xl h-65 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                                        <div className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-500 h-30 rounded-xl mb-4 flex items-center justify-center">
                                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-white font-bold text-lg mb-2">Teknoloji Sektörü</h3>
                                        <p className="text-blue-100 text-sm">En popüler pozisyonlar</p>
                                    </div>
                                </Link>

                                {/* Image Card 2 */}
                                <Link to="/job/2" className="block">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border h-60 border-white/20 shadow-xl transform hover:scale-105 transition-transform duration-300 mt-8 cursor-pointer">
                                        <div className="aspect-square bg-gradient-to-br h-30 from-green-400 to-teal-500 rounded-xl mb-4 flex items-center justify-center">
                                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-white font-bold text-lg mb-2">Uzaktan Çalışma</h3>
                                        <p className="text-blue-100 text-sm">Esnek çalışma imkanları</p>
                                    </div>
                                </Link>

                                {/* Image Card 3 */}
                                <Link to="/job/3" className="block">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-xl transform h-65 hover:scale-105 transition-transform duration-300 cursor-pointer">
                                        <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-500 h-30 rounded-xl mb-4 flex items-center justify-center">
                                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-white font-bold text-lg mb-2">Kariyer Gelişimi</h3>
                                        <p className="text-blue-100 text-sm">Sürekli öğrenme fırsatları</p>
                                    </div>
                                </Link>

                                {/* Image Card 4 */}
                                <Link to="/job/4" className="block">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 h-60 border border-white/20 shadow-xl transform hover:scale-105 transition-transform duration-300 mt-8 cursor-pointer">
                                        <div className="aspect-square bg-gradient-to-br from-blue-400 to-indigo-500 h-30 rounded-xl mb-4 flex items-center justify-center">
                                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-white font-bold text-lg mb-2">Rekabetçi Maaşlar</h3>
                                        <p className="text-blue-100 text-sm">En iyi ücret paketleri</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}