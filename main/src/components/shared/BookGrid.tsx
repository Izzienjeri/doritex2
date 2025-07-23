"use client";

import { BookCard } from './BookCard';
import { Book } from '@/lib/data';

export function BookGrid({ books }: { books: Book[] }) {
  return (
    <div
      className="inline-grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-10"
      key={books.length}
    >
      {books.length > 0 ? (
        books.map((book, index) => (
          <BookCard 
            key={book.id} 
            book={book} 
            priority={index < 5} 
            animationDelay={`${index * 0.05}s`}
          />
        ))
      ) : (
        <p className="col-span-full text-center text-lg text-muted-foreground py-10">
          No books found matching your criteria.
        </p>
      )}
    </div>
  );
}
