import { BookOpen, Globe, Zap, Lock } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-light tracking-wide mb-3">Tentang Perpustakaan</h1>
          <p className="text-gray-500 text-sm tracking-wide">
            Mengenal lebih jauh tentang platform digital perpustakaan pribadi kami
          </p>
        </div>

        <div className="bg-black text-white p-12 mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <BookOpen className="w-8 h-8" />
            <h2 className="text-2xl font-light tracking-wide">Perpustakaan Pribadi</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Platform PWA modern yang menghadirkan pengalaman membaca digital yang elegan
            dan fungsional. Dengan koleksi buku pilihan dari berbagai genre, Perpustakaan
            Pribadi menjadi ruang digital untuk mengeksplorasi dunia literatur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border border-gray-200 p-8">
            <Zap className="w-8 h-8 mb-4 text-black" />
            <h3 className="text-lg font-medium mb-3">Progressive Web App</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Teknologi PWA memungkinkan aplikasi ini untuk diinstal di perangkat Anda
              seperti aplikasi native, dengan fitur offline yang memastikan akses tanpa
              gangguan internet.
            </p>
          </div>

          <div className="border border-gray-200 p-8">
            <Globe className="w-8 h-8 mb-4 text-black" />
            <h3 className="text-lg font-medium mb-3">Responsif & Modern</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Desain minimalis hitam-putih yang elegan beradaptasi sempurna di semua
              perangkat, dari smartphone hingga desktop, untuk pengalaman optimal.
            </p>
          </div>

          <div className="border border-gray-200 p-8">
            <BookOpen className="w-8 h-8 mb-4 text-black" />
            <h3 className="text-lg font-medium mb-3">Koleksi Berkualitas</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Setiap buku dipilih dengan cermat dengan informasi detail termasuk sinopsis
              mendalam, harga, publisher, dan spesifikasi lengkap untuk panduan pembaca.
            </p>
          </div>

          <div className="border border-gray-200 p-8">
            <Lock className="w-8 h-8 mb-4 text-black" />
            <h3 className="text-lg font-medium mb-3">Data Statis Aman</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Semua data buku tersimpan secara statis dalam aplikasi, memastikan privasi
              dan performa yang optimal tanpa dependensi server eksternal.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-light tracking-wide mb-6">Fitur Utama</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0 rounded-full text-sm font-medium">
                1
              </div>
              <div>
                <h3 className="font-medium mb-1">Halaman Landing Menarik</h3>
                <p className="text-gray-600 text-sm">
                  Beranda yang dirancang untuk memberikan kesan pertama yang profesional
                  dan mengundang pengguna untuk menjelajahi koleksi.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0 rounded-full text-sm font-medium">
                2
              </div>
              <div>
                <h3 className="font-medium mb-1">Koleksi Buku Grid</h3>
                <p className="text-gray-600 text-sm">
                  Tampilan koleksi buku dalam format grid responsif dengan preview cover
                  dan informasi dasar setiap buku.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0 rounded-full text-sm font-medium">
                3
              </div>
              <div>
                <h3 className="font-medium mb-1">Detail Buku Komprehensif</h3>
                <p className="text-gray-600 text-sm">
                  Halaman detail dengan informasi lengkap: cover, judul, penulis, harga,
                  publisher, tanggal publikasi, format, ukuran, dan sinopsis panjang.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0 rounded-full text-sm font-medium">
                4
              </div>
              <div>
                <h3 className="font-medium mb-1">Profil Mahasiswa</h3>
                <p className="text-gray-600 text-sm">
                  Halaman profil yang menampilkan informasi pengguna termasuk nama,
                  NIM, kelompok, dan email untuk identifikasi.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-light tracking-wide mb-4">Teknologi</h2>
          <p className="text-gray-600 mb-4">
            Aplikasi ini dibangun menggunakan teknologi modern dan terbaik:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-black"></div>
              <span>React 18 - Framework JavaScript</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-black"></div>
              <span>TypeScript - Type-safe Development</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-black"></div>
              <span>Tailwind CSS - Utility-first Styling</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-black"></div>
              <span>Vite - Build Tool & Dev Server</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-black"></div>
              <span>Service Workers - Offline Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-black"></div>
              <span>Lucide React - Icon Library</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
