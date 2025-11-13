import { User, Mail, Hash, Users } from 'lucide-react';

export default function Profile() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-light tracking-wide mb-3">Profil</h1>
          <p className="text-gray-500 text-sm tracking-wide">
            Informasi mahasiswa dan pengembang aplikasi
          </p>
        </div>

        <div className="bg-white border border-gray-200 p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>
          </div>

          <div className="space-y-6 max-w-md mx-auto">
            <div className="pb-6 border-b border-gray-200">
              <div className="flex items-start space-x-4">
                <User className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Nama Lengkap
                  </p>
                  <p className="text-lg">Muhammad Rizki Pratama</p>
                </div>
              </div>
            </div>

            <div className="pb-6 border-b border-gray-200">
              <div className="flex items-start space-x-4">
                <Hash className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    NIM
                  </p>
                  <p className="text-lg">12345678</p>
                </div>
              </div>
            </div>

            <div className="pb-6 border-b border-gray-200">
              <div className="flex items-start space-x-4">
                <Users className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Kelompok
                  </p>
                  <p className="text-lg">Kelompok 1</p>
                </div>
              </div>
            </div>

            <div className="pb-6 border-b border-gray-200">
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <p className="text-lg">rizki.pratama@student.ac.id</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-sm tracking-widest text-gray-500 mb-4 text-center">
              TENTANG APLIKASI
            </h2>
            <p className="text-center text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
              Aplikasi Perpustakaan Pribadi adalah Progressive Web App (PWA) yang
              dikembangkan menggunakan React dan TypeScript. Aplikasi ini menampilkan
              koleksi buku dengan desain minimalis modern berwarna hitam-putih,
              dilengkapi dengan fitur offline dan dapat diinstall ke perangkat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
