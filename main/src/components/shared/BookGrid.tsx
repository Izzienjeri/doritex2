"use client";

import { motion } from 'framer-motion';
import { BookCard } from './BookCard';
import { Book } from '@/lib/data';

export function BookGrid({ books }: { books: Book[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="inline-grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      key={books.length} // Re-trigger animation when books change
    >
      {books.length > 0 ? (
        books.map((book, index) => (
          <motion.div key={book.id} variants={itemVariants}>
            <BookCard book={book} priority={index < 5} />
          </motion.div>
        ))
      ) : (
        <p className="col-span-full text-center text-lg text-muted-foreground py-10">
          No books found matching your criteria.
        </p>
      )}
    </motion.div>
  );
}
