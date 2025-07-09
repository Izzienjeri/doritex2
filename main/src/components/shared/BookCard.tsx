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
    <Card className="flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 group border">
      <CardHeader className="p-0 border-b">
        <div className="aspect-[3/4] w-full overflow-hidden">
          <Image
            src={book.imageUrl}
            alt={book.title}
            width={400}
            height={600}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-5 flex flex-col">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{book.category}</p>
        <CardTitle className="text-xl font-bold leading-tight mb-2 text-foreground transition-colors duration-300 group-hover:text-[--color-brand-primary] flex-grow">{book.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{book.author}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-5 pt-2">
        <p className="text-2xl font-extrabold text-[--color-brand-tertiary]">${book.price.toFixed(2)}</p>
        <Button size="icon" className="bg-[--color-brand-primary] hover:bg-[--color-brand-primary]/90 text-white rounded-full h-11 w-11 shadow-lg group-hover:scale-110 transition-transform duration-300 ease-out">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Add to Cart</span>
        </Button>
      </CardFooter>
    </Card>
  );
}