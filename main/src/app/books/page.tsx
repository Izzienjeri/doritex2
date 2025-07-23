import { dummyBooks } from '@/lib/data';
import { BookFilters } from '@/components/shared/BookFilters';
import { BookGrid } from '@/components/shared/BookGrid';

type Props = {
  searchParams: Promise<{
    query?: string;
    category?: string;
  }>;
};

export default async function BooksPage({ searchParams }: Props) {
  const { query = '', category = 'All' } = await searchParams;

  const filteredBooks = dummyBooks.filter(book => {
    const matchesCategory = category === 'All' || book.category === category;
    const matchesSearch = book.title.toLowerCase().includes(query.toLowerCase()) ||
                          book.author.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-dot-grid [mask-image:linear-gradient(to_bottom,white,transparent_80%)]"></div>
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-center">
              Our Collection
            </h1>
            <p className="text-center text-muted-foreground text-base sm:text-lg mt-4 mb-8 md:mb-12 max-w-2xl mx-auto font-sans">
              Search and explore our full range of publications. Your next great read is just a click away.
            </p>
            <div className="max-w-xl mx-auto mb-12 md:mb-16">
              <BookFilters />
            </div>
          </div>

          <div className="flex justify-center">
            <BookGrid books={filteredBooks} />
          </div>
        </div>
      </section>
    </div>
  );
}
