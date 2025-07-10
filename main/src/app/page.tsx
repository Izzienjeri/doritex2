"use client";
import { Button } from "@/components/ui/button";
import { BookCard } from "@/components/shared/BookCard";
import { Book, dummyBooks, dummyCategories } from "@/lib/data";
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight, Lightbulb, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

const getRandomUniqueBooks = (source: Book[], count: number, existingIds: Set<string>): Book[] => {
  const shuffled = [...source].sort(() => 0.5 - Math.random());
  const uniqueBooks: Book[] = [];
  for (const book of shuffled) {
    if (!existingIds.has(book.id) && uniqueBooks.length < count) {
      uniqueBooks.push(book);
    }
  }
  return uniqueBooks;
};

// Kept for Desktop view
const HeroBookCoverflow = ({ books, onPrev, onNext }: { books: Book[]; onPrev: () => void; onNext: () => void; }) => {
  const activeIndex = books.length > 0 ? Math.floor(books.length / 2) : 0;
  if (!books.length) return null;
  const activeBook = books[activeIndex];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 sm:gap-8">
      <div className="relative w-full h-64 sm:h-80" style={{ perspective: "1200px" }}>
        {books.map((book, i) => {
          const offset = i - activeIndex;
          const isVisible = Math.abs(offset) <= 2;

          return (
            <motion.div
              key={`${book.id}-${i}`}
              className="absolute w-40 h-full top-0 left-1/2 -ml-20 sm:w-52 sm:-ml-28"
              initial={false}
              animate={{
                x: `${offset * 35}%`,
                scale: offset === 0 ? 1 : 0.75,
                rotateY: offset * -25,
                zIndex: books.length - Math.abs(offset),
                opacity: isVisible ? 1 : 0,
              }}
              transition={{ type: "tween", ease: [0.25, 0.1, 0.25, 1], duration: 0.6 }}
            >
              <Link href={`/books/${book.id}`} className="cursor-pointer" tabIndex={-1}>
                <Image
                  src={book.imageUrl}
                  alt={book.title}
                  width={400}
                  height={600}
                  className="object-cover w-full h-full rounded-lg shadow-2xl shadow-black/50 pointer-events-none"
                />
              </Link>
            </motion.div>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        <Button size="icon" variant="outline" className="rounded-full bg-background/50 backdrop-blur-sm shrink-0" onClick={onPrev}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="text-center w-56 sm:w-64">
          <Link href={`/books/${activeBook?.id}`}>
            <motion.h3 key={activeBook?.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-bold text-lg text-white/90 truncate">
              {activeBook?.title}
            </motion.h3>
          </Link>
          <p className="text-sm text-muted-foreground">{activeBook?.author}</p>
        </div>
        <Button size="icon" variant="outline" className="rounded-full bg-background/50 backdrop-blur-sm shrink-0" onClick={onNext}>
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

// New Component for Mobile Hero
const MobileBookScroller = ({ books }: { books: Book[] }) => {
  return (
    <motion.div
      className="mt-16 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-full relative">
        <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
          {books.slice(0, 6).map((book, i) => (
            <Link href={`/books/${book.id}`} key={book.id} className="shrink-0 block w-36 sm:w-40 group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                className="w-full aspect-[2/3] rounded-lg shadow-2xl shadow-black/50 overflow-hidden transform transition-transform duration-300 group-hover:-translate-y-2"
              >
                <Image
                  src={book.imageUrl}
                  alt={book.title}
                  width={200}
                  height={300}
                  className="object-cover w-full h-full pointer-events-none"
                />
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default function HomePage() {
  const featuredBooks = dummyBooks.filter((book) => book.isFeatured);
  const [heroBooks, setHeroBooks] = useState<Book[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setHeroBooks(getRandomUniqueBooks(dummyBooks, 10, new Set())); 
  }, []);

  const handleCoverflowNext = useCallback(() => {
    setHeroBooks((currentBooks) => {
      if (currentBooks.length < 2) return currentBooks;
      const [first, ...rest] = currentBooks;
      return [...rest, first];
    });
  }, []);

  const handleCoverflowPrev = () => {
    setHeroBooks((currentBooks) => {
      if (currentBooks.length < 2) return currentBooks;
      const last = currentBooks[currentBooks.length - 1];
      const rest = currentBooks.slice(0, -1);
      return [last, ...rest];
    });
  };
  
  useEffect(() => {
    if (window.innerWidth < 1024) return; // Only run carousel on desktop
    const interval = setInterval(handleCoverflowNext, 3000);
    return () => clearInterval(interval);
  }, [handleCoverflowNext]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <div className="flex flex-col">
      <section id="interactive-hero" className="interactive-aurora w-full overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 bg-dot-grid -z-10"></div>
        <div className="container relative z-10 mx-auto px-4">
          
          <div className="flex flex-col justify-center text-center min-h-[90vh] pt-24 pb-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:text-left lg:pt-0 lg:pb-0 lg:min-h-[90vh]">
            <div className="lg:col-start-1">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="text-4xl sm:text-5xl font-bold tracking-tighter text-white md:text-7xl">
                Gateway to <span className="text-primary">Educational</span> Excellence.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="mt-6 text-lg text-white/80 md:text-xl max-w-2xl mx-auto lg:mx-0 font-sans">
                Discover a curated collection of academic and professional publications designed to empower your learning journey.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="mt-10">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base h-14 px-8 rounded-full shadow-lg shadow-primary/20 btn-shine animate-button-pulse">
                  <Link href="/books">
                    Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            
            <div className="lg:hidden">
              <MobileBookScroller books={dummyBooks} />
            </div>

            <div className="hidden lg:flex w-full h-[30rem] items-center justify-center">
              {isMounted && (
                <HeroBookCoverflow 
                  books={heroBooks.slice(0, 7)} 
                  onPrev={handleCoverflowPrev} 
                  onNext={handleCoverflowNext} 
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative bg-background z-10">
        <div className="absolute inset-0 -z-10 bg-dot-grid [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-baseline mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-foreground">
              Featured Publications
            </h2>
            <Link href="/books" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="text-muted-foreground text-base mb-12 max-w-3xl font-sans">
            Handpicked selections from our experts to kickstart your intellectual adventure.
          </p>
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {featuredBooks.map((book) => (
              <motion.div key={book.id} variants={itemVariants}>
                <BookCard book={book} />
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-12 text-center sm:hidden">
            <Button variant="outline" size="lg" asChild className="rounded-full px-8 h-12">
                <Link href="/books">View All Publications</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="categories" className="py-24 md:py-32 bg-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-dot-grid"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-20 text-foreground">
            Browse By Category
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {dummyCategories.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Link href="#" className="block group relative overflow-hidden rounded-2xl shadow-lg">
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <Image
                      src={category.imageUrl}
                      alt={category.name}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
                  <div className="relative h-60 sm:h-80 p-4 sm:p-6 flex flex-col justify-end">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md transition-transform duration-500 group-hover:-translate-y-2">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 md:py-32 text-white overflow-hidden relative bg-animated-gradient">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/subtle-prism.png')` }}></div>
        <div className="container mx-auto text-center px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Our Mission: Empowering Minds
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-white/70 leading-relaxed mb-20 font-sans">
            At Doritex, we believe in the transformative power of knowledge. Our mission is to provide high-quality, accessible educational resources that inspire curiosity and empower individuals to achieve their goals.
          </p>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: BookOpen, title: "Vast Collection", desc: "Explore a diverse range of subjects and authors." },
              { icon: Lightbulb, title: "Quality Content", desc: "Carefully curated and peer-reviewed publications." },
              { icon: TrendingUp, title: "Continuous Growth", desc: "Supporting your lifelong learning journey." },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="bg-white/10 p-6 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-primary hover:-translate-y-1"
              >
                <div className="flex flex-row items-center gap-5">
                  <div className="flex-shrink-0 rounded-full bg-primary/20 p-3 border border-primary/30">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
                    <p className="text-sm text-white/70 font-sans leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}