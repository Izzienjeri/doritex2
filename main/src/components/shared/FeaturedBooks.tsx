"use client";

import { dummyBooks } from "@/lib/data";
import { BookCard } from "./BookCard";

export function FeaturedBooks() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
      {dummyBooks.slice(0, 3).map((book, index) => (
        <div
          key={book.id}
          className={`transition-transform duration-300 ease-in-out hover:scale-105 ${
            index === 1 ? "sm:z-10" : "sm:opacity-90"
          } ${
            index === 2 ? "hidden sm:block" : ""
          }`}
        >
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
}
