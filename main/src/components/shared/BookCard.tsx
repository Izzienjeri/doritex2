import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { cn } from '@/lib/utils';

interface BookCardProps {
  book: Book;
  priority?: boolean;
}

export function BookCard({ book, priority = false }: BookCardProps) {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "ADD_ITEM", payload: { ...book, quantity: 1 } });
    toast.success(`${book.title} added to cart!`);
  };

  return (
    <Link href={`/books/${book.id}`} className="block group" tabIndex={0}>
      <Card className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-xl",
        "bg-card/80 backdrop-blur-sm border shadow-lg shadow-black/10",
        "transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:-translate-y-2"
      )}>
        <CardHeader className="p-0 relative">
          <div className="aspect-[2/3] w-full overflow-hidden rounded-t-xl">
              <Image
                src={book.imageUrl}
                alt={book.title}
                width={300}
                height={450}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                priority={priority}
              />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-3 flex flex-col bg-transparent">
          <CardTitle className="text-sm font-bold leading-snug text-foreground/90 flex-grow group-hover:text-primary transition-colors">{book.title}</CardTitle>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-3 pt-1 bg-transparent">
          <p className="text-sm font-bold text-card-foreground/80 font-sans">Kshs {book.price.toFixed(2)}</p>
          <Button
            size="icon"
            className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full h-9 w-9 shrink-0"
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
