import { useEffect, useRef } from "react";
import { books } from "../data/books";
import { Page } from "../types";
import { ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LandingCurve } from "../assets/LandingCurve";

// Daftarkan plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface LandingProps {
  onNavigate: (page: Page) => void;
}

// --- BARU: Mengambil 6 buku ---
const featuredBooks = {
  book1: books[0], // An Old Soul
  book2: books[2], // Dead Flowers
  book3: books[5], // The Silo
  book4: books[3], // The Next Big Thing
};

export default function Landing({ onNavigate }: LandingProps) {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Hero elements (Load immediately)
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Content elements (Appear after scroll)
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // --- BARU: 6 Refs untuk buku ---
  const book1Ref = useRef<HTMLImageElement>(null);
  const book2Ref = useRef<HTMLImageElement>(null);
  const book3Ref = useRef<HTMLImageElement>(null);
  const book4Ref = useRef<HTMLImageElement>(null);
  const book5Ref = useRef<HTMLImageElement>(null);
  const book6Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const path = svgRef.current?.querySelector("#curve-path") as SVGPathElement;
    if (!path) return;

    const elementsOnLoad = [titleRef.current, scrollRef.current].filter(
      Boolean
    );

    // --- BARU: Menambahkan 6 buku ke array ---
    const elementsOnScrollEnd = [
      descRef.current,
      buttonRef.current,
      book1Ref.current,
      book2Ref.current,
      book3Ref.current,
      book4Ref.current,
      book5Ref.current,
      book6Ref.current, // <-- Ditambahkan
    ].filter(Boolean);

    // Initialize hidden states
    gsap.set(elementsOnLoad, { opacity: 0 });
    gsap.set(elementsOnScrollEnd, { opacity: 0, y: 80 });

    // Initialize SVG path
    const pathLength = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    // Animation 1: Hero elements fade in on load
    gsap.to(elementsOnLoad, {
      opacity: 1,
      duration: 1.6,
      delay: 0.4,
      stagger: 0.2,
      ease: "power2.out",
    });

    // Animation 2: Title sticky animation - bergerak ke atas dan mengecil
    // Ini membuat judul tetap terlihat (stuck) tapi di posisi yang berbeda
    gsap.to(titleRef.current, {
      y: () => {
        // Pindahkan judul dari tengah layar ke posisi atas yang baru
        const heroHeight = window.innerHeight;
        const titleHeight = titleRef.current?.offsetHeight || 0;
        // (Tinggi Layar / 2) - (Setengah Tinggi Judul) - (Jarak dari atas)
        return -(heroHeight / 2 - titleHeight / 2 - 120); // 80px dari atas
      },
      scale: 0.8, // Sedikit mengecil
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: mainContainerRef.current,
        start: "top top",
        end: "50% top", // Selesaikan animasi di 50% scroll
        scrub: 1,
      },
    });

    // Animation 3: SVG line draws as user scrolls
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: mainContainerRef.current,
        start: "top top",
        end: "50% top", // Garis selesai bersamaan dengan judul
        scrub: 1.2,
      },
    });

    // Animation 4: Content elements slide in when section enters viewport
    gsap.to(elementsOnScrollEnd, {
      opacity: 1,
      y: 0,
      stagger: 0.12,
      ease: "power2.out",
      duration: 1.2,
      scrollTrigger: {
        trigger: contentContainerRef.current, // Memicu saat section konten terlihat
        start: "top 75%", // Saat 75% bagian atasnya masuk layar
        toggleActions: "play none none reverse",
      },
    });

    // Animation 5: Scroll indicator fades out
    gsap.to(scrollRef.current, {
      opacity: 0,
      y: -20,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: mainContainerRef.current,
        start: "top top",
        end: "top top-=100",
        scrub: true,
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    // min-h-[200vh] untuk memberi ruang scroll
    <div
      ref={mainContainerRef}
      className="min-h-[200vh] bg-white text-black relative"
    >
      {/* Hero Section - Sticky (150vh agar animasi title dan garis punya ruang) */}
      <div className="h-[150vh] sticky top-0 flex items-center justify-center overflow-hidden">
        <LandingCurve ref={svgRef} />

        {/* Hero Content Container - Centered Vertically */}
        <div className="relative z-40 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
          {/* Kontainer untuk Judul, diposisikan di tengah */}
          <div className="w-full flex ">
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center max-w-2xl"
            >
              One Stop Digital
              <span className="block mt-1">Library</span>
              <span className="block mt-1">for Creatives.</span>
            </h1>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-30"
        >
          <span className="text-sm text-gray-600 mb-2 font-medium">
            Scroll Down
          </span>
          <ChevronDown className="w-6 h-6 text-gray-600 animate-bounce" />
        </div>
      </div>

      {/* Content Section - Di bawah Hero (Static, z-index di atas SVG) */}
      <div
        ref={contentContainerRef}
        className="relative z-20 bg-white pt-16 sm:pt-20 lg:pt-36 pb-32" // bg-white penting untuk menutupi garis
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Description & CTA - Dibuat di tengah */}
          <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-24">
            <p
              ref={descRef}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-8 leading-relaxed"
            >
              Digital library of books chosen by creatives for creatives.
            </p>
            <button
  className="cursor-pointer rounded-full px-12 py-4 font-bold border-2 
             border-gray-900 bg-white text-gray-900 
             hover:bg-gray-900 hover:border-gray-900 hover:text-white"
  onClick={() => onNavigate("home")}
>
  View Collection
</button>
          </div>

          {/* --- BARU: Layout Buku yang Lebih Menarik (6 Buku) --- */}
          {/* Menggunakan grid 12 kolom untuk fleksibilitas */}
          <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* Buku 1 */}
            <div
              ref={book1Ref}
              className="col-span-6 sm:col-span-4 lg:col-span-3"
            >
              <img
                src={featuredBooks.book1.cover}
                className="w-full shadow-2xl rounded-lg transform -rotate-3 hover:rotate-0 hover:scale-110 hover:z-50 transition-all duration-300"
                alt={featuredBooks.book1.title}
              />
            </div>

            {/* Buku 2 */}
            <div
              ref={book2Ref}
              className="col-span-6 sm:col-span-4 lg:col-span-3"
            >
              <img
                src={featuredBooks.book2.cover}
                className="w-full shadow-2xl rounded-lg transform rotate-2 hover:rotate-0 hover:scale-110 hover:z-50 transition-all duration-300"
                alt={featuredBooks.book2.title}
              />
            </div>

            {/* Buku 3 */}
            <div
              ref={book3Ref}
              className="col-span-6 sm:col-span-4 lg:col-span-3"
            >
              <img
                src={featuredBooks.book3.cover}
                className="w-full shadow-2xl rounded-lg transform rotate-4 hover:rotate-0 hover:scale-110 hover:z-50 transition-all duration-300"
                alt={featuredBooks.book3.title}
              />
            </div>

            {/* Buku 4 */}
            <div
              ref={book4Ref}
              className="col-span-6 sm:col-span-4 lg:col-span-3"
            >
              <img
                src={featuredBooks.book4.cover}
                className="w-full shadow-2xl rounded-lg transform -rotate-2 hover:rotate-0 hover:scale-110 hover:z-50 transition-all duration-300"
                alt={featuredBooks.book4.title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
