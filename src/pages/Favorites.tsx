export default function Favorites() {
    return(
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h1 className="text-4xl font-extrabold text-gray-900 mb-2 flex items-center space-x-3">
                                <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span>Favori İlanlarım</span>
                            </h1>
                            <p className="text-gray-600 text-lg">
                                Kaydettiğiniz iş ilanlarını buradan görüntüleyebilirsiniz
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-white rounded-xl shadow-md px-6 py-3">
                                <p className="text-sm text-gray-500">Toplam Favori</p>
                                <p className="text-2xl font-bold text-red-600">3</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Bar */}
                <div className="bg-white rounded-2xl shadow-md p-4 mb-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-700 font-medium text-sm">
                            Tümünü Seç
                        </button>
                        <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium text-sm flex items-center space-x-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            <span>Seçilenleri Kaldır</span>
                        </button>
                    </div>
                    <div className="flex items-center space-x-2">
                        <select className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Sırala: En Yeni</option>
                            <option>Sırala: En Eski</option>
                            <option>Sırala: Maaş (Yüksek)</option>
                            <option>Sırala: Maaş (Düşük)</option>
                        </select>
                    </div>
                </div>

                {/* Favorites List */}
                <div className="space-y-4">
                    {/* Favorite Card 1 */}
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 border-red-100">
                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4 flex-1">
                                <div className="relative">
                                    <input type="checkbox" className="w-5 h-5 text-red-600 rounded mt-1" />
                                </div>
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                                    <span className="text-white font-bold text-xl">T</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <h3 className="text-xl font-bold text-gray-900">Frontend Developer</h3>
                                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Yeni</span>
                                    </div>
                                    <p className="text-gray-600 font-medium mb-2">TechCorp A.Ş.</p>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                                        <div className="flex items-center space-x-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>İstanbul, Kadıköy</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>15.000 - 25.000 TL</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>2 gün önce</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg">React</span>
                                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg">TypeScript</span>
                                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg">Tailwind CSS</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end space-y-2">
                                <button className="p-2 text-red-500 hover:text-red-700 transition-colors bg-red-50 hover:bg-red-100 rounded-lg">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                                <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                                    Başvur
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Favorite Card 2 */}
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 border-red-100">
                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4 flex-1">
                                <div className="relative">
                                    <input type="checkbox" className="w-5 h-5 text-red-600 rounded mt-1" />
                                </div>
                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
                                    <span className="text-white font-bold text-xl">D</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <h3 className="text-xl font-bold text-gray-900">Backend Developer</h3>
                                    </div>
                                    <p className="text-gray-600 font-medium mb-2">DataSoft Teknoloji</p>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                                        <div className="flex items-center space-x-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>Ankara, Çankaya</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>20.000 - 30.000 TL</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>5 gün önce</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-lg">Node.js</span>
                                        <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-lg">Python</span>
                                        <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-lg">PostgreSQL</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end space-y-2">
                                <button className="p-2 text-red-500 hover:text-red-700 transition-colors bg-red-50 hover:bg-red-100 rounded-lg">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                                <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                                    Başvur
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Favorite Card 3 */}
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 border-red-100">
                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4 flex-1">
                                <div className="relative">
                                    <input type="checkbox" className="w-5 h-5 text-red-600 rounded mt-1" />
                                </div>
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-md">
                                    <span className="text-white font-bold text-xl">F</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <h3 className="text-xl font-bold text-gray-900">Full Stack Developer</h3>
                                        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">Acil</span>
                                    </div>
                                    <p className="text-gray-600 font-medium mb-2">FutureTech Solutions</p>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                                        <div className="flex items-center space-x-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>İzmir, Konak</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>25.000 - 35.000 TL</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>1 hafta önce</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-lg">React</span>
                                        <span className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-lg">Node.js</span>
                                        <span className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-lg">MongoDB</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end space-y-2">
                                <button className="p-2 text-red-500 hover:text-red-700 transition-colors bg-red-50 hover:bg-red-100 rounded-lg">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                                <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                                    Başvur
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Empty State (Hidden - for reference) */}
                <div className="hidden bg-white rounded-2xl shadow-lg p-12 text-center">
                    <div className="max-w-md mx-auto">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Henüz favori ilanınız yok</h3>
                        <p className="text-gray-600 mb-6">
                            Beğendiğiniz iş ilanlarını favorilerinize ekleyerek daha sonra kolayca erişebilirsiniz.
                        </p>
                        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                            İş İlanlarını Keşfet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}