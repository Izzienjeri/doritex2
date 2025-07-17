import { dummyBooks, Book } from '@/lib/data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Target, PenTool, Users, Home, School, ShieldCheck, Star, UserCheck, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { AddToCart } from '@/components/shared/AddToCart';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';

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
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-foreground mb-2">
              {book.title}
            </h1>
            <p className="text-lg text-muted-foreground font-sans mb-4">by {book.author}</p>
            
            {/* KICD Badge and School Tag */}
            <div className='flex flex-wrap gap-3 mb-6'>
                <Badge variant="secondary" className="bg-green-100 hover:bg-green-100 text-green-800 border-green-200 text-sm py-1.5 px-3">
                  <ShieldCheck className="mr-2 h-5 w-5" /> KICD Approved
                </Badge>
                <Badge variant="outline" className="text-primary border-primary/30 text-sm py-1.5 px-3">
                  <Star className="mr-2 h-5 w-5 text-yellow-500 fill-current" /> Used in 120+ Kenyan schools
                </Badge>
            </div>

            <p className="text-4xl font-bold text-primary my-4 font-sans">
              Kshs {book.price.toFixed(2)}
            </p>
            <p className="text-foreground/80 leading-relaxed font-sans mb-10">
              {book.description}
            </p>

            <AddToCart book={book} />

            {/* Perfect For & Why Choose Section */}
            <div className="grid sm:grid-cols-2 gap-8 mt-4 border-t pt-8">
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><Target className="h-5 w-5 text-primary"/>Perfect for:</h3>
                <ul className="space-y-2 text-foreground/80 font-sans list-inside">
                  <li className="flex items-start gap-2"><UserCheck className="h-4 w-4 mt-1 text-accent shrink-0"/>Parents supporting home learning</li>
                  <li className="flex items-start gap-2"><Users className="h-4 w-4 mt-1 text-accent shrink-0"/>Teachers using CBC creative arts</li>
                  <li className="flex items-start gap-2"><School className="h-4 w-4 mt-1 text-accent shrink-0"/>Schools ordering for term 1–3</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><Check className="h-5 w-5 text-primary"/>Why choose this book:</h3>
                 <ul className="space-y-2 text-foreground/80 font-sans list-inside">
                  <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 mt-1 text-accent shrink-0"/>CBC-aligned and approved by KICD</li>
                  <li className="flex items-start gap-2"><PenTool className="h-4 w-4 mt-1 text-accent shrink-0"/>Builds creativity & critical thinking</li>
                  <li className="flex items-start gap-2"><BookOpen className="h-4 w-4 mt-1 text-accent shrink-0"/>Includes engaging, practical activities</li>
                  <li className="flex items-start gap-2"><Home className="h-4 w-4 mt-1 text-accent shrink-0"/>Easy to use at home or in class</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}