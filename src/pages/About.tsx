import {
  BookOpen,
  Globe,
  Zap,
  Lock,
  Search,
  Heart,
  UserCheck,
} from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Container yang lebih sempit untuk keterbacaan, font Onest otomatis diterapkan */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Tentang Perpustakaan Pribadi
          </h1>
          <p className="text-lg text-gray-600">
            Mengenal lebih jauh tentang platform digital perpustakaan pribadi kami
          </p>
        </div>

        {/* Blok deskripsi utama */}
        <div className="bg-black text-white p-10 md:p-12 mb-12 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4 mb-6">
            <BookOpen className="w-8 h-8 flex-shrink-0" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Perpustakaan Pribadi</h2>
          </div>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Platform PWA modern yang menghadirkan pengalaman membaca digital yang
            elegan dan fungsional. Dengan koleksi buku pilihan, Perpustakaan
            Pribadi menjadi ruang digital yang dipersonalisasi untuk
            mengeksplorasi dunia literatur Anda.
          </p>
        </div>

        {/* --- FITUR UTAMA BARU --- */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Fitur Utama</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Fitur 1: Pencarian */}
            <div className="border border-gray-200 p-6 rounded-lg">
              <Search className="w-8 h-8 mb-4 text-black" />
              <h3 className="text-lg font-medium mb-2">Pencarian Cepat</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Temukan buku berdasarkan judul atau penulis secara instan
                langsung dari header.
              </p>
            </div>
            {/* Fitur 2: Favorit */}
            <div className="border border-gray-200 p-6 rounded-lg">
              <Heart className="w-8 h-8 mb-4 text-black" />
              <h3 className="text-lg font-medium mb-2">Koleksi Favorit</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tandai buku yang Anda sukai dan lihat semuanya dalam
                halaman favorit khusus.
              </p>
            </div>
            {/* Fitur 3: Profil */}
            <div className="border border-gray-200 p-6 rounded-lg">
              <UserCheck className="w-8 h-8 mb-4 text-black" />
              <h3 className="text-lg font-medium mb-2">Profil Interaktif</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Edit informasi profil Anda dan unggah foto pribadi yang
                tersimpan di peramban Anda.
              </p>
            </div>
          </div>
        </div>

        {/* --- Keunggulan Platform (Diperbarui) --- */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Keunggulan Platform</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <Zap className="w-8 h-8 mb-4 text-black" />
              <h3 className="text-lg font-medium mb-2">Progressive Web App</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Teknologi PWA memungkinkan aplikasi diinstal di perangkat Anda
                seperti aplikasi native, dengan fitur offline.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <Globe className="w-8 h-8 mb-4 text-black" />
              <h3 className="text-lg font-medium mb-2">Responsif & Modern</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Desain minimalis beradaptasi sempurna di semua perangkat,
                dari smartphone hingga desktop, untuk pengalaman optimal.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <BookOpen className="w-8 h-8 mb-4 text-black" />
              <h3 className="text-lg font-medium mb-2">Koleksi Berkualitas</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Setiap buku dipilih dengan cermat dengan informasi detail
                termasuk sinopsis mendalam dan spesifikasi.
              </p>
            </div>
            {/* Diperbarui dari "Data Statis" */}
            <div className="border border-gray-200 p-6 rounded-lg">
              <Lock className="w-8 h-8 mb-4 text-black" />
              <h3 className="text-lg font-medium mb-2">Data Tersimpan Lokal</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Profil dan favorit Anda disimpan dengan aman di peramban
                menggunakan localStorage, tanpa server eksternal.
              </p>
            </div>
          </div>
        </div>

        {/* --- Teknologi (Diperbarui) --- */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Teknologi</h2>
          <p className="text-gray-600 mb-6">
            Aplikasi ini dibangun menggunakan teknologi modern dan terbaik:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span>React 18</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span>TypeScript</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span>Vite</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span>Service Workers (PWA)</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span>Lucide React (Icons)</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span>localStorage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}