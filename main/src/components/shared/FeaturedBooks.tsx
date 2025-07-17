"use client";

import { dummyBooks } from '@/lib/data';
import { BookCard } from './BookCard';

export function FeaturedBooks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {dummyBooks.slice(0, 3).map((book) => (
        <div key={book.id} className="w-full max-w-xs">
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
}