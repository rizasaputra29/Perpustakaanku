import { useState, useMemo } from 'react';
import Header from './components/Header';
import Landing from './pages/Landing';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import Profile from './pages/Profile';
import About from './pages/About';
import Favorites from './pages/Favorites';
import { books } from './data/books';
import { Page } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // State baru untuk melacak ID buku favorit
  const [favoriteIDs, setFavoriteIDs] = useState<string[]>(() => {
    // Muat favorit yang tersimpan dari localStorage saat aplikasi pertama kali dimuat
    const savedFavorites = localStorage.getItem('favoriteBooks');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    if (page === 'home' || page === 'landing') {
      setSelectedBookId(null);
    }
  };

  const handleBookClick = (bookId: string) => {
    setSelectedBookId(bookId);
    setCurrentPage('detail');
  };

  // Fungsi baru untuk menambah/menghapus favorit
  const toggleFavorite = (bookId: string) => {
    setFavoriteIDs((prevFavorites) => {
      let newFavorites;
      if (prevFavorites.includes(bookId)) {
        newFavorites = prevFavorites.filter((id) => id !== bookId);
      } else {
        newFavorites = [...prevFavorites, bookId];
      }
      // Simpan ke localStorage
      localStorage.setItem('favoriteBooks', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const selectedBook = books.find((book) => book.id === selectedBookId);

  // Memo-kan buku yang difilter agar tidak dihitung ulang setiap render
  const filteredBooks = useMemo(() => {
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]); // Hanya filter ulang jika 'books' atau 'searchQuery' berubah

  // Memo-kan buku favorit
  const favoriteBooks = useMemo(() => {
    return books.filter((book) => favoriteIDs.includes(book.id));
  }, [favoriteIDs]); // Hanya filter ulang jika 'books' atau 'favoriteIDs' berubah

  // Fungsi untuk merender halaman saat ini
  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <Landing onNavigate={handleNavigate} />;
      case 'home':
        return (
          <Home
            books={filteredBooks}
            onBookClick={handleBookClick}
            favoriteIDs={favoriteIDs}
            onToggleFavorite={toggleFavorite}
          />
        );
      case 'detail':
        return selectedBook ? (
          <BookDetail book={selectedBook} onBack={() => handleNavigate('home')} />
        ) : null;
      case 'profile':
        return <Profile />;
      case 'about':
        return <About />;
      case 'favorites': // Tambahkan case untuk halaman baru
        return (
          <Favorites
            books={favoriteBooks}
            onBookClick={handleBookClick}
            favoriteIDs={favoriteIDs}
            onToggleFavorite={toggleFavorite}
          />
        );
      default:
        return <Landing onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen">
      {currentPage !== 'landing' && (
        <Header
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onSearch={setSearchQuery}
        />
      )}
      {renderPage()}
    </div>
  );
}

export default App;