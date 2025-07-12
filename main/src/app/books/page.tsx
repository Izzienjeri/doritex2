import { motion } from 'framer-motion';
import { BookCard } from '@/components/shared/BookCard';
import { dummyBooks, Book } from '@/lib/data';
import { BookFilters } from '@/components/shared/BookFilters';

// This is a Server Component
export default async function BooksPage({ searchParams }: {
  searchParams?: {
    query?: string;
    category?: string;
  }
}) {
  const query = searchParams?.query || '';
  const category = searchParams?.category || 'All';

  // Data filtering now happens on the server
  const filteredBooks = dummyBooks.filter(book => {
    const matchesCategory = category === 'All' || book.category === category;
    const matchesSearch = book.title.toLowerCase().includes(query.toLowerCase()) || 
                          book.author.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-dot-grid [mask-image:linear-gradient(to_bottom,white,transparent_80%)]"></div>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-center">
              Our Collection
            </h1>
            <p className="text-center text-muted-foreground text-lg mt-4 mb-12 max-w-2xl mx-auto font-sans">
              Search and explore our full range of publications. Your next great read is just a click away.
            </p>
            <div className="max-w-xl mx-auto mb-20">
              <BookFilters />
            </div>
          </div>
          
          <BookGrid books={filteredBooks} />
        </div>
      </section>
    </div>
  );
}

// A new component for the book grid to keep animations contained
function BookGrid({ books }: { books: Book[] }) {
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={books.length} // Re-trigger animation when books change
        >
            {books.length > 0 ? (
                books.map((book, index) => (
                    <motion.div key={book.id} variants={itemVariants}>
                        {/* FIX: Pass the priority prop for the first 5 images */}
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
