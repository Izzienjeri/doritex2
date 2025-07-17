"use client";

import { dummyBooks } from '@/lib/data';
import { BookCard } from './BookCard';

export function FeaturedBooks() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
      {dummyBooks.slice(0, 3).map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </div>
  );
}
