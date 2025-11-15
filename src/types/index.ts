export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  cover: string;
  description: string;
  category: string;
  pages: number;
  isbn: string;
  price: number;
  publisher: string;
  publicationDate: string;
  format: string;
  dimensions: string;
  synopsis: string;
  purchaseUrl: string;
}

export type Page = 'landing' | 'home' | 'detail' | 'profile' | 'about' | 'favorites';