"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookCard } from '@/components/shared/BookCard';
import { dummyBooks } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = dummyBooks.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-dot-grid [mask-image:linear-gradient(to_bottom,white,transparent_80%)]"></div>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-center text-foreground">
              Our Collection
            </h1>
            <p className="text-center text-muted-foreground text-lg mt-4 mb-12 max-w-2xl mx-auto font-sans">
              Search and explore our full range of publications. Your next great read is just a click away.
            </p>
            <div className="max-w-xl mx-auto mb-20 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search by title or author..."
                className="pl-12 h-14 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredBooks.map((book) => (
              <motion.div key={book.id} variants={itemVariants}>
                <BookCard book={book} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}