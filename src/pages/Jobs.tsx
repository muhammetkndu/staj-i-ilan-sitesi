import { Link } from "react-router-dom";

export default function Jobs() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                        İş İlanları
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Hayalinizdeki işi bulun ve kariyerinize başlayın
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Main Content - Job Cards */}
                    <div className="flex-1">
                        {/* Stats Bar */}
                        <div className="bg-white rounded-2xl shadow-md p-4 mb-6 flex items-center justify-between">
                            <div className="flex items-center space-x-6">
                                <div>
                                    <p className="text-sm text-gray-500">Toplam İlan</p>
                                    <p className="text-2xl font-bold text-gray-900">1,234</p>
                                </div>
                                <div className="h-12 w-px bg-gray-200"></div>
                                <div>
                                    <p className="text-sm text-gray-500">Yeni İlanlar</p>
                                    <p className="text-2xl font-bold text-green-600">+45</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                    </svg>
                                </button>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Job Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Job Card 1 */}
                            <Link to="/job/1" className="group">
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-300 cursor-pointer h-full flex flex-col">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                            <span className="text-white font-bold text-lg">T</span>
                                        </div>
                                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Yeni</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Frontend Developer</h3>
                                    <p className="text-gray-600 font-medium mb-4">TechCorp A.Ş.</p>
                                    <div className="space-y-2 mb-4 flex-1">
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>İstanbul, Kadıköy</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="font-semibold text-green-600">15.000 - 25.000 TL</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>2 gün önce</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg">React</span>
                                        <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg">TypeScript</span>
                                        <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg">Tailwind</span>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                        <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md text-sm">
                                            Başvur
                                        </button>
                                    </div>
                                </div>
                            </Link>

                            {/* Job Card 2 */}
                            <Link to="/job/2" className="group">
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-300 cursor-pointer h-full flex flex-col">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                            <span className="text-white font-bold text-lg">D</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Backend Developer</h3>
                                    <p className="text-gray-600 font-medium mb-4">DataSoft Teknoloji</p>
                                    <div className="space-y-2 mb-4 flex-1">
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>Ankara, Çankaya</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="font-semibold text-green-600">20.000 - 30.000 TL</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>5 gün önce</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-lg">Node.js</span>
                                        <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-lg">Python</span>
                                        <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-lg">PostgreSQL</span>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                        <button className="px-5 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-teal-700 transition-all shadow-md text-sm">
                                            Başvur
                                        </button>
                                    </div>
                                </div>
                            </Link>

                            {/* Job Card 3 */}
                            <Link to="/job/3" className="group">
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-orange-300 cursor-pointer h-full flex flex-col">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                            <span className="text-white font-bold text-lg">F</span>
                                        </div>
                                        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">Acil</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Full Stack Developer</h3>
                                    <p className="text-gray-600 font-medium mb-4">FutureTech Solutions</p>
                                    <div className="space-y-2 mb-4 flex-1">
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>İzmir, Konak</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="font-semibold text-orange-600">25.000 - 35.000 TL</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>1 hafta önce</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2.5 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-lg">React</span>
                                        <span className="px-2.5 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-lg">Node.js</span>
                                        <span className="px-2.5 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-lg">MongoDB</span>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                        <button className="px-5 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all shadow-md text-sm">
                                            Başvur
                                        </button>
                                    </div>
                                </div>
                            </Link>

                            {/* Job Card 4 */}
                            <Link to="/job/4" className="group">
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-purple-300 cursor-pointer h-full flex flex-col">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                            <span className="text-white font-bold text-lg">M</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Mobile Developer</h3>
                                    <p className="text-gray-600 font-medium mb-4">MobileApp Co.</p>
                                    <div className="space-y-2 mb-4 flex-1">
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>İstanbul, Beşiktaş</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="font-semibold text-purple-600">18.000 - 28.000 TL</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>3 gün önce</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2.5 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-lg">React Native</span>
                                        <span className="px-2.5 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-lg">Flutter</span>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                        <button className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-md text-sm">
                                            Başvur
                                        </button>
                                    </div>
                                </div>
                            </Link>

                            {/* Job Card 5 */}
                            <Link to="/job/5" className="group">
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-indigo-300 cursor-pointer h-full flex flex-col">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                            <span className="text-white font-bold text-lg">D</span>
                                        </div>
                                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Yeni</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">DevOps Engineer</h3>
                                    <p className="text-gray-600 font-medium mb-4">CloudTech Solutions</p>
                                    <div className="space-y-2 mb-4 flex-1">
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>Ankara, Çankaya</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="font-semibold text-indigo-600">22.000 - 32.000 TL</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>1 gün önce</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-lg">Docker</span>
                                        <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-lg">Kubernetes</span>
                                        <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-lg">AWS</span>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                        <button className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all shadow-md text-sm">
                                            Başvur
                                        </button>
                                    </div>
                                </div>
                            </Link>

                            {/* Job Card 6 */}
                            <Link to="/job/6" className="group">
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-teal-300 cursor-pointer h-full flex flex-col">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                            <span className="text-white font-bold text-lg">U</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">UI/UX Designer</h3>
                                    <p className="text-gray-600 font-medium mb-4">DesignStudio</p>
                                    <div className="space-y-2 mb-4 flex-1">
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>İzmir, Alsancak</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="font-semibold text-teal-600">16.000 - 24.000 TL</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>4 gün önce</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2.5 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-lg">Figma</span>
                                        <span className="px-2.5 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-lg">Adobe XD</span>
                                        <span className="px-2.5 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-lg">Sketch</span>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                        <button className="px-5 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all shadow-md text-sm">
                                            Başvur
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Pagination */}
                        <div className="mt-8 flex justify-center items-center space-x-2">
                            <button className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors text-gray-700 font-medium">
                                Önceki
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md font-medium">1</button>
                            <button className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors text-gray-700 font-medium">2</button>
                            <button className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors text-gray-700 font-medium">3</button>
                            <button className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors text-gray-700 font-medium">Sonraki</button>
                        </div>
                    </div>

                    {/* Sidebar - Filters */}
                    <div className="lg:w-80">
                        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                                <span>Filtreler</span>
                            </h2>

                            {/* Location Filter */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">Lokasyon</label>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                                        <span className="text-sm text-gray-700">İstanbul</span>
                                        <span className="ml-auto text-xs text-gray-500">(456)</span>
                                    </label>
                                    <label className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                                        <span className="text-sm text-gray-700">Ankara</span>
                                        <span className="ml-auto text-xs text-gray-500">(234)</span>
                                    </label>
                                    <label className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                                        <span className="text-sm text-gray-700">İzmir</span>
                                        <span className="ml-auto text-xs text-gray-500">(189)</span>
                                    </label>
                                    <label className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                                        <span className="text-sm text-gray-700">Bursa</span>
                                        <span className="ml-auto text-xs text-gray-500">(98)</span>
                                    </label>
                                </div>
                            </div>

                            {/* Salary Range */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">Maaş Aralığı</label>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                        <input type="radio" name="salary" className="w-4 h-4 text-blue-600" />
                                        <span className="text-sm text-gray-700">10.000 - 20.000 TL</span>
                                    </label>
                                    <label className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                        <input type="radio" name="salary" className="w-4 h-4 text-blue-600" />
                                        <span className="text-sm text-gray-700">20.000 - 30.000 TL</span>
                                    </label>
                                    <label className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                        <input type="radio" name="salary" className="w-4 h-4 text-blue-600" />
                                        <span className="text-sm text-gray-700">30.000 - 50.000 TL</span>
                                    </label>
                                    <label className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                        <input type="radio" name="salary" className="w-4 h-4 text-blue-600" />
                                        <span className="text-sm text-gray-700">50.000+ TL</span>
                                    </label>
                                </div>
                            </div>

                            {/* Job Type */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">Çalışma Tipi</label>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                                        <span className="text-sm text-gray-700">Tam Zamanlı</span>
                                    </label>
                                    <label className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                                        <span className="text-sm text-gray-700">Yarı Zamanlı</span>
                                    </label>
                                    <label className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                                        <span className="text-sm text-gray-700">Uzaktan</span>
                                    </label>
                                    <label className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                                        <span className="text-sm text-gray-700">Hibrit</span>
                                    </label>
                                </div>
                            </div>

                            {/* Experience Level */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">Deneyim Seviyesi</label>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                                        <span className="text-sm text-gray-700">Stajyer</span>
                                    </label>
                                    <label className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                                        <span className="text-sm text-gray-700">Junior</span>
                                    </label>
                                    <label className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                                        <span className="text-sm text-gray-700">Mid-Level</span>
                                    </label>
                                    <label className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                                        <span className="text-sm text-gray-700">Senior</span>
                                    </label>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3 pt-4 border-t border-gray-200">
                                <button className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                                    Filtrele
                                </button>
                                <button className="w-full px-4 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                                    Temizle
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

