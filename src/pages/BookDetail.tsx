import { ArrowLeft, Calendar, BookOpen, Hash, MapPin, Ruler } from 'lucide-react';
import { Book } from '../types';

interface BookDetailProps {
  book: Book;
  onBack: () => void;
}

export default function BookDetail({ book, onBack }: BookDetailProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm tracking-wide">KEMBALI</span>
        </button>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden mb-6">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
            <button className="w-full bg-black text-white py-4 font-medium tracking-widest hover:bg-gray-800 transition-colors">
              BELI SEKARANG
            </button>
          </div>

          <div className="flex flex-col">
            <div className="inline-block px-3 py-1 bg-black text-white text-xs tracking-widest mb-4 self-start">
              {book.category.toUpperCase()}
            </div>

            <h1 className="text-4xl font-light mb-2 tracking-wide">{book.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{book.author}</p>

            <div className="mb-8 pb-8 border-b border-gray-200">
              <p className="text-4xl font-light tracking-wide">{formatPrice(book.price)}</p>
            </div>

            <div className="space-y-4 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Tanggal Publikasi</p>
                  <p className="text-black">{book.publicationDate}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Penerbit</p>
                  <p className="text-black">{book.publisher}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <BookOpen className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Jumlah Halaman</p>
                  <p className="text-black">{book.pages} halaman</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Hash className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">ISBN</p>
                  <p className="text-black">{book.isbn}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-gray-400 mt-1 flex items-center justify-center">
                  <span className="text-xs">📦</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Format</p>
                  <p className="text-black">{book.format}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Ruler className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Ukuran</p>
                  <p className="text-black">{book.dimensions}</p>
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-500 tracking-wide">
              Tersedia untuk dibeli melalui berbagai platform penjual buku online terpercaya
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-light tracking-wide mb-4">Sinopsis</h2>
            <p className="text-gray-700 leading-relaxed mb-8">{book.synopsis}</p>

            <h2 className="text-lg font-light tracking-wide mb-4">Deskripsi Singkat</h2>
            <p className="text-gray-600">{book.description}</p>
          </div>

          <div className="bg-gray-50 p-8 border border-gray-200 h-fit">
            <h3 className="font-medium tracking-wide mb-6">INFORMASI BUKU</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Pengarang</p>
                <p className="text-black">{book.author}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Genre</p>
                <p className="text-black">{book.category}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Tahun Terbit</p>
                <p className="text-black">{book.year}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Harga</p>
                <p className="text-lg font-medium text-black">{formatPrice(book.price)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
