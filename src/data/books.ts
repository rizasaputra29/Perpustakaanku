import { Book } from '../types';

export const books: Book[] = [
  {
    id: '1',
    title: 'An Old Soul',
    author: 'M. Kevin Hayden',
    year: 2023, // Tahun disesuaikan ke modern
    // URL sampul Pexels/Open Library diganti dengan sampul ikonik berkualitas tinggi
    cover: 'https://blog-cdn.reedsy.com/directories/gallery/265/large_a8018c273b25a2b2badb0abe557d25cb.jpg',
    description: 'A brilliant, heart-breaking mystery set in 1996 Chicago.',
    category: 'Mystery', // Kategori disesuaikan dengan sinopsis
    pages: 412, // Disesuaikan
    isbn: '978-1-5063-4567-8', // ISBN fiktif
    price: 155000,
    publisher: 'Orion Press', // Disesuaikan
    publicationDate: '15 September 2023', // Disesuaikan
    format: 'Paperback',
    dimensions: '20 x 13 cm',
    synopsis: 'A brilliant, heart-breaking, and compulsively readable mystery that tugs on the fabric of reality, and explores what it might mean for humanity if we didn’t have to lose our loved ones…at least not in the way we think. In 1996 Chicago, twenty-five-year-old Isaac André feels like a stranger in his own life—until the world starts whispering back. The coincidences are too uncanny to ignore, but for now, they’re all happening in his favor.'
  },
  {
    id: '2',
    title: 'Wall Streets Blind Spots',
    author: 'Jose Mayora',
    year: 2024, // Tahun disesuaikan ke modern
    // Sampul modern yang bersih
    cover: 'https://blog-cdn.reedsy.com/directories/gallery/289/large_91f1228b8325921b605ab81308f5f7e2.jpg',
    description: 'A deep dive into financial market failures and ethics.',
    category: 'Non-Fiction', // Kategori disesuaikan dengan judul
    pages: 350, // Disesuaikan
    isbn: '978-0-393-24792-5', // ISBN fiktif
    price: 180000,
    publisher: 'Beacon Business', // Disesuaikan
    publicationDate: '20 March 2024', // Disesuaikan
    format: 'Hardcover',
    dimensions: '23 x 15 cm',
    synopsis: 'An unflinching analysis of the overlooked ethical and systemic flaws within global finance. Jose Mayora, seorang veteran Wall Street, memaparkan bagaimana bias, keserakahan, dan kegagalan regulasi terus membentuk krisis, menawarkan solusi radikal untuk pasar yang lebih transparan dan adil.'
  },
  {
    id: '3',
    title: 'Dead Flowers',
    author: 'J.M. Petrick',
    year: 2022, // Tahun disesuaikan ke modern
    // Sampul minimalis yang kuat
    cover: 'https://blog-cdn.reedsy.com/directories/gallery/285/large_7dd6a2cc216d856056547f26ea3d3b78.jpg',
    description: 'A dark, atmospheric psychological thriller.',
    category: 'Thriller', // Kategori disesuaikan
    pages: 288, // Disesuaikan
    isbn: '978-1-6816-1055-6', // ISBN fiktif
    price: 130000,
    publisher: 'Raven Books', // Disesuaikan
    publicationDate: '1 November 2022', // Disesuaikan
    format: 'Paperback',
    dimensions: '19 x 12.5 cm',
    synopsis: 'Ketika serangkaian orang hilang mengguncang komunitas pinggiran kota yang tenang, detektif Elara Stone harus menghadapi rahasia tergelapnya sendiri untuk menemukan pelaku yang meninggalkan "bunga mati" sebagai tanda. Ketegangan psikologis yang mencekam dari awal hingga akhir.'
  },
  {
    id: '4',
    title: 'The Next Big Thing',
    author: 'Andrew McLinden',
    year: 2021, // Tahun disesuaikan ke modern
    // Sampul ilustratif yang indah (Rifle Paper Co.)
    cover: 'https://blog-cdn.reedsy.com/directories/gallery/244/large_71a53ec3dd63ffa1a3f906332dfc9a36.jpg',
    description: 'A dark satire of the music industry and corruption.',
    category: 'Fiction', // Kategori disesuaikan dengan sinopsis
    pages: 390, // Disesuaikan
    isbn: '978-0-06-234567-9', // ISBN fiktif
    price: 140000,
    publisher: 'Music Row Publishing', // Disesuaikan
    publicationDate: '10 July 2021', // Disesuaikan
    format: 'Hardcover',
    dimensions: '22 x 14 cm',
    synopsis: 'In this dark satire of the music industry, The Next Big Thing follows Danny McAllister, a toxic, careless, and occasionally malevolent lead guitarist whose influence slowly corrupts those around him. The design draws inspiration from live gig photography, band posters, and set lists, with the torn paper edge subtly hinting at Danny’s destructive nature.'
  },
  {
    id: '5',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    // Sampul ikonik yang valid
    cover: 'https://m.media-amazon.com/images/I/7108sdEUEGL.jpg',
    description: 'A novel exploring alienation and teenage angst in New York.',
    category: 'Classic Literature', // Tetap
    pages: 277, // Tetap
    isbn: '978-0-316-76948-0', // Tetap
    price: 115000, // Tetap
    publisher: 'Little, Brown', // Tetap
    publicationDate: '16 July 1951', // Tetap
    format: 'Paperback', // Tetap
    dimensions: '20 x 12.5 cm', // Tetap
    synopsis: 'Follow Holden Caulfield, a troubled teenager navigating the challenges of adolescence and identity in 1950s New York City. Through his distinctive voice and cynical observations, Salinger captures the confusion and pain of growing up. This controversial yet influential novel remains a powerful exploration of teenage rebellion and the search for authenticity.'
  },
  {
    id: '6',
    title: 'The Silo',
    author: 'G.S. Heist',
    year: 2020, // Tahun disesuaikan ke modern
    // Sampul ilustratif modern
    cover: 'https://blog-cdn.reedsy.com/directories/gallery/250/large_c58c89de3e7f1d60d64f7e344999fc2f.jpg',
    description: 'A dark, atmospheric psychological literary thriller set in the American Midwest.',
    category: 'Thriller', // Kategori disesuaikan dengan sinopsis
    pages: 375, // Disesuaikan
    isbn: '978-1-9876-5432-1', // ISBN fiktif
    price: 160000,
    publisher: 'Midwest Thriller House', // Disesuaikan
    publicationDate: '5 April 2020', // Disesuaikan
    format: 'Hardcover',
    dimensions: '21 x 14 cm',
    synopsis: 'We went dark and atmospheric for this debut novel by a former police chief—a psychological literary thriller set in the American Midwest. The cover focuses on the silo at the story’s core, with a subtle blood pool in front as ominous foreshadowing. The silo motif was repeated throughout the interior design of the book.'
  },
  {
    id: '7',
    title: 'Always to Be Found',
    author: 'J.S. Gazaille',
    year: 2024, // Tahun disesuaikan ke modern
    // Sampul grafis minimalis
    cover: 'https://blog-cdn.reedsy.com/directories/gallery/253/large_4e145baa41196e7abdcd773a74081d72.jpg',
    description: 'A charming rom-com with a thrilling twist in the Caribbean.',
    category: 'Romantic Suspense', // Kategori disesuaikan dengan sinopsis
    pages: 310, // Disesuaikan
    isbn: '978-0-451-47890-2', // ISBN fiktif
    price: 120000,
    publisher: 'Island Breeze Press', // Disesuaikan
    publicationDate: '12 February 2024', // Disesuaikan
    format: 'Paperback',
    dimensions: '21 x 13.5 cm',
    synopsis: 'Always to Be Found blends rom-com charm with thriller intrigue against the stunning Caribbean islands of St. Barths and the Magdalen Islands. The blonde protagonist lounges poolside at her luxurious villa, unaware she\'s being watched. Who is this hidden man—friend or foe? What\'s the secret in the confidential envelope beside her? My cinematic approach instantly immerses readers.'
  },
  {
    id: '8',
    title: 'The Killer Chorus',
    author: 'Jack Conlan',
    year: 2023, // Tahun disesuaikan ke modern
    // Sampul Penguin Classics yang artistik
    cover: 'https://blog-cdn.reedsy.com/directories/gallery/179/large_180814baa7dae07f9fb2cf9f044b5166.jpg',
    description: 'A gripping historical mystery involving a famous theater troupe.',
    category: 'Historical Mystery', // Kategori disesuaikan
    pages: 512, // Disesuaikan
    isbn: '978-3-1614-8410-0', // ISBN fiktif
    price: 175000,
    publisher: 'Conlan Publishing', // Disesuaikan
    publicationDate: '18 October 2023', // Disesuaikan
    format: 'Hardcover',
    dimensions: '22 x 15 cm',
    synopsis: 'Ketika anggota "The Killer Chorus," sebuah kelompok teater terkenal di London era Victoria, mulai menghilang secara misterius, seorang inspektur yang skeptis harus menyelidiki dunia gemerlap panggung yang penuh dengan persaingan, rahasia, dan dendam yang mematikan.'
  }
];