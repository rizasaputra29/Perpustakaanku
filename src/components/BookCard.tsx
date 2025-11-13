import { Book } from '../types';

interface BookCardProps {
  book: Book;
  onClick: () => void;
}

export default function BookCard({ book, onClick }: BookCardProps) {
  return (
    <button
      onClick={onClick}
      className="group bg-white border border-gray-200 overflow-hidden hover:border-black transition-all duration-300 hover:shadow-xl"
    >
      <div className="aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 text-left">
        <h3 className="font-medium text-sm mb-1 line-clamp-2 group-hover:text-gray-600 transition-colors">
          {book.title}
        </h3>
        <p className="text-xs text-gray-500 mb-2">{book.author}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">{book.year}</span>
          <span className="text-xs text-black uppercase tracking-wider">{book.category}</span>
        </div>
      </div>
    </button>
  );
}
