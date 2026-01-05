export default function JobDetail(){
    return(
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <button className="mb-6 flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span className="font-medium">Geri Dön</span>
                </button>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Job Header Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-100">
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-start space-x-4 flex-1">
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                        <span className="text-white font-bold text-3xl">T</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <h1 className="text-3xl font-extrabold text-gray-900">Frontend Developer</h1>
                                            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">Yeni</span>
                                        </div>
                                        <p className="text-xl text-gray-600 font-semibold mb-4">TechCorp A.Ş.</p>
                                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                                            <div className="flex items-center space-x-2">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="font-medium">İstanbul, Kadıköy</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="font-medium">15.000 - 25.000 TL</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <span className="font-medium">Tam Zamanlı</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="font-medium">2 gün önce</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end space-y-3">
                                    <button className="p-3 text-gray-400 hover:text-red-500 transition-colors bg-gray-50 hover:bg-red-50 rounded-xl">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>
                                    <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                                        Hemen Başvur
                                    </button>
                                </div>
                            </div>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-200">
                                <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-lg">React</span>
                                <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-lg">TypeScript</span>
                                <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-lg">Tailwind CSS</span>
                                <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-lg">Next.js</span>
                                <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-lg">Redux</span>
                                <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-lg">Git</span>
                            </div>
                        </div>

                        {/* Job Description */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span>İş Açıklaması</span>
                            </h2>
                            <div className="prose max-w-none text-gray-700 space-y-4">
                                <p className="text-lg leading-relaxed">
                                    TechCorp A.Ş. olarak, yenilikçi web uygulamaları geliştiren dinamik bir ekibe katılacak yetenekli bir Frontend Developer arıyoruz. Modern teknolojiler kullanarak kullanıcı deneyimini ön planda tutan projelerde yer alacaksınız.
                                </p>
                                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Görevler ve Sorumluluklar:</h3>
                                <ul className="space-y-2 list-disc list-inside text-gray-700">
                                    <li>React ve TypeScript kullanarak modern web uygulamaları geliştirmek</li>
                                    <li>Kullanıcı arayüzü tasarımlarını kodlamak ve responsive tasarımlar oluşturmak</li>
                                    <li>Backend ekipleri ile işbirliği yaparak API entegrasyonları gerçekleştirmek</li>
                                    <li>Kod kalitesini artırmak için code review süreçlerine katılmak</li>
                                    <li>Performans optimizasyonu ve test yazımı yapmak</li>
                                    <li>Agile metodolojiler ile çalışmak ve sprint planlamalarına katılmak</li>
                                </ul>
                            </div>
                        </div>

                        {/* Requirements */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Gereksinimler</span>
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Zorunlu:</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start space-x-3">
                                            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">En az 2 yıl React ve TypeScript deneyimi</span>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">Modern CSS framework'leri (Tailwind CSS, Styled Components) bilgisi</span>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">RESTful API entegrasyonu deneyimi</span>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">Git versiyon kontrolü bilgisi</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Tercih Edilen:</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start space-x-3">
                                            <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-700">Next.js veya benzer SSR framework deneyimi</span>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-700">State management (Redux, Zustand) bilgisi</span>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-700">Test yazma deneyimi (Jest, React Testing Library)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Company Info */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <span>Şirket Hakkında</span>
                            </h2>
                            <div className="flex items-start space-x-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                                    <span className="text-white font-bold text-2xl">T</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">TechCorp A.Ş.</h3>
                                    <p className="text-gray-600 mb-4">
                                        2015 yılında kurulan TechCorp, teknoloji sektöründe öncü bir şirkettir. 150+ çalışanımız ile dijital dönüşüm projelerinde lider konumdayız.
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            <span>150+ Çalışan</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>İstanbul, Türkiye</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span>Teknoloji</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6 border-t border-gray-200">
                                <h4 className="font-semibold text-gray-900 mb-3">Şirket Avantajları:</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Esnek çalışma saatleri</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Uzaktan çalışma imkanı</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Eğitim ve gelişim desteği</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Sağlık sigortası</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-80">
                        {/* Quick Apply Card */}
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 mb-6 text-white">
                            <h3 className="text-xl font-bold mb-4">Hızlı Başvuru</h3>
                            <p className="text-blue-100 mb-6 text-sm">
                                CV'nizi yükleyin ve birkaç dakika içinde başvurunuzu tamamlayın.
                            </p>
                            <button className="w-full px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg mb-3">
                                CV Yükle ve Başvur
                            </button>
                            <button className="w-full px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors border border-white/30">
                                LinkedIn ile Başvur
                            </button>
                        </div>

                        {/* Job Details Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">İş Detayları</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                    <div>
                                        <p className="text-xs text-gray-500">İlan No</p>
                                        <p className="text-sm font-semibold text-gray-900">TC-FD-2024-001</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <p className="text-xs text-gray-500">Yayın Tarihi</p>
                                        <p className="text-sm font-semibold text-gray-900">15 Ocak 2024</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <p className="text-xs text-gray-500">Son Başvuru</p>
                                        <p className="text-sm font-semibold text-gray-900">15 Şubat 2024</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <div>
                                        <p className="text-xs text-gray-500">Deneyim Seviyesi</p>
                                        <p className="text-sm font-semibold text-gray-900">Mid-Level</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Share Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Paylaş</h3>
                            <div className="flex items-center space-x-3">
                                <button className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center space-x-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                    <span className="text-sm font-medium">Facebook</span>
                                </button>
                                <button className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center space-x-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                    </svg>
                                    <span className="text-sm font-medium">Twitter</span>
                                </button>
                                <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Jobs */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Benzer İş İlanları</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Related Job Card 1 */}
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 cursor-pointer">
                            <div className="flex items-start space-x-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold">B</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 mb-1">Backend Developer</h3>
                                    <p className="text-sm text-gray-600">DataSoft</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                <span>Ankara</span>
                                <span>20.000 - 30.000 TL</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">Node.js</span>
                                <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">Python</span>
                            </div>
                        </div>

                        {/* Related Job Card 2 */}
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 cursor-pointer">
                            <div className="flex items-start space-x-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold">F</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 mb-1">Full Stack Developer</h3>
                                    <p className="text-sm text-gray-600">FutureTech</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                <span>İzmir</span>
                                <span>25.000 - 35.000 TL</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded">React</span>
                                <span className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded">Node.js</span>
                            </div>
                        </div>

                        {/* Related Job Card 3 */}
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 cursor-pointer">
                            <div className="flex items-start space-x-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold">M</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 mb-1">Mobile Developer</h3>
                                    <p className="text-sm text-gray-600">MobileApp Co.</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                <span>İstanbul</span>
                                <span>18.000 - 28.000 TL</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded">React Native</span>
                                <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded">Flutter</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}