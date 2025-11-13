import { Book } from '../types';
import BookCard from '../components/BookCard';

interface HomeProps {
  books: Book[];
  onBookClick: (bookId: string) => void;
}

export default function Home({ books, onBookClick }: HomeProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-light tracking-wide mb-3">Koleksi Buku</h1>
          <p className="text-gray-500 text-sm tracking-wide">
            Jelajahi {books.length} buku dalam perpustakaan pribadi
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onClick={() => onBookClick(book.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
