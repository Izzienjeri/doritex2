"use client";

import { motion } from 'framer-motion';
import { dummyBooks } from '@/lib/data';
import { BookCard } from './BookCard';

export function FeaturedBooks() {
  return (
    <section className="py-24 md:py-32 relative z-10 bg-background/80 backdrop-blur-sm border-t border-b">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter">
            Featured Publications
          </h2>
          <p className="text-muted-foreground text-lg mt-4 mb-16 font-sans">
            Each book is a vessel of knowledge, meticulously crafted from ink
            and inspiration.
          </p>
        </motion.div>
        <div className="flex justify-center">
            <div className="inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
              {dummyBooks.slice(0, 3).map((book) => (
                <BookCard book={book} key={book.id} />
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}
