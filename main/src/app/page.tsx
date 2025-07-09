"use client";
import { Button } from "@/components/ui/button";
import { BookCard } from "@/components/shared/BookCard";
import { Book, dummyBooks, dummyCategories } from "@/lib/data";
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight, Lightbulb, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const getRandomUniqueBooks = (source: Book[], count: number): Book[] => {
  const shuffled = [...source].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const HeroBookCoverflow = ({ books, setBooks }: { books: Book[]; setBooks: React.Dispatch<React.SetStateAction<Book[]>> }) => {
  const activeIndex = books.length > 0 ? Math.floor(books.length / 2) : 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setBooks((currentBooks) => {
        if (currentBooks.length < 2) return currentBooks;
        const [first, ...rest] = currentBooks;
        return [...rest, first];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [books.length, setBooks]);

  const handleNext = () => {
    setBooks((currentBooks) => {
      if (currentBooks.length < 2) return currentBooks;
      const [first, ...rest] = currentBooks;
      return [...rest, first];
    });
  };

  const handlePrev = () => {
    setBooks((currentBooks) => {
      if (currentBooks.length < 2) return currentBooks;
      const last = currentBooks[currentBooks.length - 1];
      const rest = currentBooks.slice(0, -1);
      return [last, ...rest];
    });
  };

  if (!books.length) return null;

  const activeBook = books[activeIndex];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 sm:gap-8">
      <div className="relative w-full h-80" style={{ perspective: "1200px" }}>
        {books.map((book, i) => {
          const offset = i - activeIndex;
          const isVisible = Math.abs(offset) <= 2;

          return (
            <motion.div
              key={book.id}
              className="absolute w-40 sm:w-52 h-full top-0 left-1/2 -ml-20 sm:-ml-28"
              initial={false}
              animate={{
                x: `${offset * 35}%`,
                scale: offset === 0 ? 1 : 0.75,
                rotateY: offset * -25,
                zIndex: books.length - Math.abs(offset),
                opacity: isVisible ? 1 : 0,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
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
        <Button 
            size="icon" 
            variant="outline" 
            className="rounded-full bg-background/50 backdrop-blur-sm"
            onClick={handlePrev}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="text-center w-64">
             <Link href={`/books/${activeBook?.id}`}>
                <motion.h3
                    key={activeBook?.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-bold text-lg text-white/90 truncate"
                >
                    {activeBook?.title}
                </motion.h3>
            </Link>
            <p className="text-sm text-muted-foreground">{activeBook?.author}</p>
        </div>
        <Button 
            size="icon" 
            variant="outline" 
            className="rounded-full bg-background/50 backdrop-blur-sm"
            onClick={handleNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default function HomePage() {
  const featuredBooks = dummyBooks.filter((book) => book.isFeatured);
  const [heroBooks, setHeroBooks] = useState<Book[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setHeroBooks(getRandomUniqueBooks(dummyBooks, 7)); 
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <div className="flex flex-col">
      <section id="interactive-hero" className="interactive-aurora w-full overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 bg-dot-grid -z-10"></div>
        <div className="container relative z-10 mx-auto min-h-[90vh] grid lg:grid-cols-2 items-center px-4 gap-12">
          
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl font-bold tracking-tighter text-white md:text-7xl lg:text-8xl"
            >
              Gateway to <span className="text-primary">Educational</span> Excellence.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-lg text-white/80 md:text-xl max-w-2xl mx-auto lg:mx-0 font-sans"
            >
              Discover a curated collection of academic and professional publications designed to empower your learning journey and fuel your growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10"
            >
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base h-14 px-8 rounded-full shadow-lg shadow-primary/20 btn-shine">
                <Link href="/books">
                  Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <div className="w-full h-[28rem] lg:h-[30rem] flex items-center justify-center">
            {isMounted && <HeroBookCoverflow books={heroBooks} setBooks={setHeroBooks} />}
          </div>

        </div>
      </section>

      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 -z-10 bg-dot-grid [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-4 text-foreground">
            Featured Publications
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-20 max-w-2xl mx-auto font-sans">
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
        </div>
      </section>

      <section id="categories" className="py-24 md:py-32 bg-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-dot-grid"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-20 text-foreground">
            Browse By Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="relative h-80 p-6 flex flex-col justify-end">
                    <h3 className="text-3xl font-bold text-white drop-shadow-md transition-transform duration-500 group-hover:-translate-y-2">
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
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/subtle-prism.png')` }}
        ></div>
        <div className="container mx-auto text-center px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Our Mission: Empowering Minds
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-white/70 leading-relaxed mb-20 font-sans">
            At Doritex, we believe in the transformative power of knowledge. Our mission is to provide high-quality, accessible educational resources that inspire curiosity and empower individuals to achieve their goals.
          </p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: BookOpen, title: "Vast Collection", desc: "Explore a diverse range of subjects and authors." },
              { icon: Lightbulb, title: "Quality Content", desc: "Carefully curated and peer-reviewed publications." },
              { icon: TrendingUp, title: "Continuous Growth", desc: "Supporting your lifelong learning journey." },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="bg-white/10 p-8 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-primary hover:-translate-y-2 hover:shadow-primary/20"
              >
                <div className="mb-5 inline-block rounded-full bg-white/10 p-4">
                  <item.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-white/60 font-sans">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}