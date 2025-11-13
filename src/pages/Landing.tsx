import { BookOpen, Bookmark, Zap } from 'lucide-react';

interface LandingProps {
  onNavigate: (page: string) => void;
}

export default function Landing({ onNavigate }: LandingProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center justify-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <BookOpen className="w-16 h-16 mb-4" />
                <h1 className="text-6xl font-light tracking-wider mb-4">
                  PERPUSTAKAAN
                </h1>
                <p className="text-xl text-gray-400 tracking-wide">
                  Koleksi literatur terbaik dunia
                </p>
              </div>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Jelajahi dunia buku dengan koleksi perpustakaan pribadi kami. Setiap
                buku dipilih dengan cermat untuk menghadirkan cerita yang menginspirasi,
                menghibur, dan mendidik.
              </p>

              <div className="space-y-4 mb-12">
                <div className="flex items-start space-x-4">
                  <Bookmark className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-lg mb-1">Koleksi Lengkap</h3>
                    <p className="text-gray-400">
                      8+ buku klasik dari berbagai genre dan penulis terkenal
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-lg mb-1">Akses Offline</h3>
                    <p className="text-gray-400">
                      Aplikasi PWA yang dapat diakses kapan saja, bahkan tanpa internet
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('home')}
                className="bg-white text-black px-8 py-3 font-medium tracking-wide hover:bg-gray-100 transition-colors"
              >
                JELAJAHI KOLEKSI
              </button>
            </div>

            <div className="hidden md:block">
              <div className="bg-gray-900 aspect-square flex items-center justify-center border border-gray-800">
                <div className="text-center">
                  <BookOpen className="w-32 h-32 text-gray-700 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg tracking-wide">
                    Koleksi Buku Istimewa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-medium tracking-widest mb-3 text-gray-400">
                TENTANG KAMI
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Perpustakaan Pribadi adalah platform modern untuk menikmati koleksi
                buku terbaik. Dirancang dengan desain minimalis untuk pengalaman membaca
                yang fokus dan nyaman.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium tracking-widest mb-3 text-gray-400">
                FITUR
              </h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Detail Buku Lengkap</li>
                <li>Harga dan Spesifikasi</li>
                <li>Sinopsis Mendalam</li>
                <li>Akses Offline</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium tracking-widest mb-3 text-gray-400">
                NAVIGASI
              </h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <button
                    onClick={() => onNavigate('home')}
                    className="hover:text-white transition-colors"
                  >
                    Koleksi
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className="hover:text-white transition-colors"
                  >
                    Tentang
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('profile')}
                    className="hover:text-white transition-colors"
                  >
                    Profil
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
