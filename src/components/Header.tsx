import { useState } from 'react';
import { BookOpen, Menu, X, Search } from 'lucide-react'; // Impor Heart
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onSearch: (query: string) => void;
}

export default function Header({ currentPage, onNavigate, onSearch }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const isActive = (page: Page | Page[]) => {
    if (Array.isArray(page)) {
      return page.includes(currentPage);
    }
    return currentPage === page;
  };

  const handleMobileNavigate = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <header className="bg-white text-black border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand - Kiri */}
          <button
            onClick={() => onNavigate('landing')}
            className="flex items-center space-x-2 hover:opacity-70 transition-opacity flex-shrink-0"
          >
            <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-black" />
            </div>
          </button>

          {/* === Navigasi Desktop - Tengah Kiri === */}
          <nav className="hidden md:flex items-center space-x-1 flex-1 ml-8">
            <button
              onClick={() => onNavigate('home')}
              className={`px-6 py-2 text-sm font-medium tracking-wide transition-colors border-r border-gray-200 ${
                isActive(['home', 'detail'])
                  ? 'text-black'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Koleksi
            </button>
            {/* --- TOMBOL FAVORIT BARU --- */}
            <button
              onClick={() => onNavigate('favorites')}
              className={`px-6 py-2 text-sm font-medium tracking-wide transition-colors border-r border-gray-200 ${
                isActive('favorites')
                  ? 'text-black'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Favorit
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`px-6 py-2 text-sm font-medium tracking-wide transition-colors border-r border-gray-200 ${
                isActive('about')
                  ? 'text-black'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Tentang
            </button>
          </nav>

          {/* === Actions - Kanan === */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari buku..."
                className="border border-gray-300 rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all w-48"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
            
            <div className="h-6 w-px bg-gray-200"></div>
            
            <button
              onClick={() => onNavigate('profile')}
              className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Profil
            </button>
          </div>

          {/* === Tombol Hamburger (Menu HP) === */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-black hover:opacity-70 transition-opacity"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* === Menu Dropdown HP === */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200`}>
        <div className="px-4 pt-4 pb-6 space-y-3">
          <button
            onClick={() => handleMobileNavigate('home')}
            className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
              isActive(['home', 'detail'])
                ? 'bg-gray-100 text-black'
                : 'text-gray-600 hover:bg-gray-50 hover:text-black'
            }`}
          >
            Koleksi
          </button>
          {/* --- TOMBOL FAVORIT BARU (MOBILE) --- */}
          <button
            onClick={() => handleMobileNavigate('favorites')}
            className={`flex items-center space-x-2 w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
              isActive('favorites')
                ? 'bg-gray-100 text-black'
                : 'text-gray-600 hover:bg-gray-50 hover:text-black'
            }`}
          >
            <span>Favorit</span>
          </button>
          <button
            onClick={() => handleMobileNavigate('about')}
            className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
              isActive('about')
                ? 'bg-gray-100 text-black'
                : 'text-gray-600 hover:bg-gray-50 hover:text-black'
            }`}
          >
            Tentang
          </button>
          <button
            onClick={() => handleMobileNavigate('profile')}
            className={`flex items-center space-x-2 w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
              isActive('profile')
                ? 'bg-gray-100 text-black'
                : 'text-gray-600 hover:bg-gray-50 hover:text-black'
            }`}
          >
            <span>Profil</span>
          </button>
          
          <div className="relative pt-2">
            <input
              type="text"
              placeholder="Cari buku..."
              className="border border-gray-300 rounded-lg w-full py-3 px-4 pl-10 text-base focus:outline-none focus:ring-2 focus:ring-black"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>

        </div>
      </div>
    </header>
  );
}