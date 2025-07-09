import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "@/lib/data";
import { ShoppingCart } from "lucide-react";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <div className="p-px bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent rounded-2xl h-full group transition-all duration-300 hover:from-primary/80 hover:via-secondary/60 hover:to-tertiary/40">
      <Card className="flex h-full flex-col overflow-hidden rounded-[15px] bg-card transition-all duration-500 ease-out group-hover:-translate-y-2 border-none relative">
        <div className="absolute -inset-px rounded-[15px] bg-card z-10"></div>
        <CardHeader className="p-0 relative z-20">
          <div className="aspect-[3/4] w-full overflow-hidden">
            <Image
              src={book.imageUrl}
              alt={book.title}
              width={400}
              height={600}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-5 flex flex-col relative z-20 bg-card">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 font-sans">
            {book.category}
          </p>
          <CardTitle className="text-xl font-bold leading-tight mb-2 text-foreground transition-colors duration-300 flex-grow">
            {book.title}
          </CardTitle>
          <p className="text-sm text-muted-foreground font-sans">
            by {book.author}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-5 pt-2 bg-card/50 relative z-20 backdrop-blur-sm">
          <p className="text-2xl font-extrabold text-foreground font-sans">
            ${book.price.toFixed(2)}
          </p>
          <Button
            size="icon"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-11 w-11 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300 ease-out btn-shine"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Add to Cart</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}