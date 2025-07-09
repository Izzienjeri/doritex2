"use client";

import { useParams } from 'next/navigation';
import { dummyBooks } from '@/lib/data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function BookDetailPage() {
  const params = useParams();
  const book = dummyBooks.find(b => b.id === params.id);
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!book) {
    return <div className="container py-20 text-center">Book not found.</div>;
  }
  
  const handleAddToCart = () => {
    for(let i = 0; i < quantity; i++) {
        dispatch({ type: 'ADD_ITEM', payload: book });
    }
    toast.success(`${quantity} x ${book.title} added to cart!`);
  }

  return (
    <div className="bg-background relative">
      <div className="absolute inset-0 -z-10 bg-dot-grid [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)] opacity-30"></div>
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
            <div className="relative shadow-2xl shadow-black/50 rounded-lg overflow-hidden">
                <Image
                    src={book.imageUrl}
                    alt={book.title}
                    width={800}
                    height={1200}
                    className="w-full h-auto object-cover"
                />
            </div>
            <div className="flex flex-col">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2 font-sans">
                  {book.category}
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-white mb-3">
                    {book.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6 font-sans">by {book.author}</p>
                <p className="text-4xl font-bold text-foreground mb-8 font-sans">
                    Kshs {book.price.toFixed(2)}
                </p>
                <p className="text-foreground/80 leading-relaxed font-sans mb-10">
                    {book.description}
                </p>
                
                <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center border border-input rounded-full p-1">
                        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center text-lg font-bold">{quantity}</span>
                        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setQuantity(q => q + 1)}>
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                    <Button size="lg" className="flex-grow bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base h-14 rounded-full shadow-lg shadow-primary/20 btn-shine" onClick={handleAddToCart}>
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}