import { BookOpen, User } from 'lucide-react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const isActive = (page: Page | Page[]) => {
    if (Array.isArray(page)) {
      return page.includes(currentPage);
    }
    return currentPage === page;
  };

  return (
    <header className="bg-black text-white border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate('landing')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <BookOpen className="w-6 h-6" />
            <span className="text-xl font-light tracking-wider">PERPUSTAKAAN</span>
          </button>

          <nav className="flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm tracking-wide transition-colors ${
                isActive(['home', 'detail'])
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              KOLEKSI
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`text-sm tracking-wide transition-colors ${
                isActive('about')
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              TENTANG
            </button>
            <button
              onClick={() => onNavigate('profile')}
              className={`flex items-center space-x-1 text-sm tracking-wide transition-colors ${
                isActive('profile')
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <User className="w-4 h-4" />
              <span>PROFIL</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
