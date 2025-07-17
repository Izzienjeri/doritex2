"use client";

import { dummyBooks } from '@/lib/data';
import { BookCard } from './BookCard';

export function FeaturedBooks() {
  return (
    // Changed xl:grid-cols-3 to lg:grid-cols-3 to make the 3-column layout appear sooner
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {dummyBooks.slice(0, 3).map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </div>
  );
}
