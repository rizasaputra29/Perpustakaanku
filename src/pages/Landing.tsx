import { books } from '../data/books';
import { Page } from '../types';

interface LandingProps {
  onNavigate: (page: Page) => void; 
}

// Ambil 7 buku, kita akan pakai semua datanya
const featuredBooks = books.slice(0, 7);

export default function Landing({ onNavigate }: LandingProps) {
  // Pastikan kita punya 7 buku sebelum mencoba merendernya
  if (featuredBooks.length < 7) {
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        Error: Data buku tidak cukup untuk menampilkan desain.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">

    <div className="absolute inset-0 z-0 opacity-90">
        {/* Top-Left - Book with circular design (index 0) */}
        <img
          src={featuredBooks[0].cover}
          className="absolute w-32 top-[8%] left-[8%] transform -rotate-[12deg] shadow-2xl 
                     md:w-56 md:top-[10%] md:left-[6%] lg:top-[12%] rounded-xl"
          alt={featuredBooks[0].title}
        />
        
        {/* Top-Right - Nike/OFF book (index 1) */}
        <img
          src={featuredBooks[1].cover}
          className="absolute w-32 top-[8%] right-[6%] transform rotate-[8deg] shadow-2xl 
                     md:w-56 md:top-[8%] md:right-[6%] lg:top-[12%] rounded-xl"
          alt={featuredBooks[1].title}
        />
        
        
        {/* Bottom-Left - Pink book (index 4) */}
        <img
          src={featuredBooks[4].cover}
          className="absolute w-32 bottom-[8%] left-[10%] transform rotate-[5deg] shadow-2xl 
                     md:w-56 md:bottom-[-1%] md:left-[10%] lg:bottom-[-5%] rounded-xl"
          alt={featuredBooks[4].title}
        />
        
        {/* Bottom-Center - HOW TO book (index 5) */}
        <img
          src={featuredBooks[5].cover}
          className="absolute w-36 bottom-[10%] left-1/2 transform -translate-x-1/2 rotate-[3deg] shadow-2xl 
                     md:w-60 md:bottom-[2%] lg:bottom-[-8%] rounded-xl"
          alt={featuredBooks[5].title}
        />
        
        {/* Bottom-Right - Yellow/Designing Brand book (index 6) */}
        <img
          src={featuredBooks[6].cover}
          className="absolute w-32 bottom-[8%] right-[8%] transform -rotate-[8deg] shadow-2xl 
                     md:w-56 md:bottom-[-2%] md:right-[10%] lg:bottom-[-5%] rounded-xl"
          alt={featuredBooks[6].title}
        />
      </div>

      {/* 3. Konten Utama (Tengah) */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center p-4 mb-10">
        {/* Ukuran font juga dibuat responsif */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 max-w-2xl leading-tight">
          One Stop Digital
          <span className="inline-flex items-center mx-2">
            Library
          </span>
          for Creatives.
        </h1>

        <p className="text-lg md:text-xl text-black mb-4 max-w-lg">
          Digital library of books chosen by creatives for creatives.
        </p>

        <button
          onClick={() => onNavigate('home')}
          className="bg-black rounded-xl text-white px-8 py-3 font-medium tracking-wide hover:bg-gray-800 transition-colors"
        >
          View Collections
        </button>
      </div>
    </div>
  );
}