import { useState } from 'react';
import Header from './components/Header';
import Landing from './pages/Landing';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import Profile from './pages/Profile';
import About from './pages/About';
import { books } from './data/books';
import { Page } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

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

  const selectedBook = books.find((book) => book.id === selectedBookId);

  return (
    <div className="min-h-screen">
      {currentPage !== 'landing' && (
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
      )}

      {currentPage === 'landing' && (
        <Landing onNavigate={handleNavigate} />
      )}

      {currentPage === 'home' && (
        <Home books={books} onBookClick={handleBookClick} />
      )}

      {currentPage === 'detail' && selectedBook && (
        <BookDetail book={selectedBook} onBack={() => handleNavigate('home')} />
      )}

      {currentPage === 'profile' && <Profile />}

      {currentPage === 'about' && <About />}
    </div>
  );
}

export default App;
