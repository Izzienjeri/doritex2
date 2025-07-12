import { dummyBooks, Book } from '@/lib/data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { AddToCart } from '@/components/shared/AddToCart';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return dummyBooks.map(book => ({
    id: book.id,
  }));
}

function getBook(id: string): Book | undefined {
  return dummyBooks.find(b => b.id === id);
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function BookDetailPage({ params }: Props) {
  const { id } = await params;

  const book = getBook(id);

  if (!book) {
    notFound();
  }

  return (
    <div className="bg-dot-grid relative">
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)] opacity-30"></div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-12">
          <Button variant="ghost" asChild>
            <Link href="/books">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Collection
            </Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="relative shadow-2xl shadow-primary/20 rounded-lg overflow-hidden">
            <Image
              src={book.imageUrl}
              alt={book.title}
              width={800}
              height={1200}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-foreground mb-3">
              {book.title}
            </h1>
            <p className="text-lg text-muted-foreground font-sans mb-3">by {book.author}</p>
            <p className="text-4xl font-bold text-primary my-6 font-sans">
              Kshs {book.price.toFixed(2)}
            </p>
            <p className="text-foreground/80 leading-relaxed font-sans mb-10">
              {book.description}
            </p>

            <AddToCart book={book} />
          </div>
        </div>
      </div>
    </div>
  );
}
