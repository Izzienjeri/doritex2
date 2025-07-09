// components/shared/BookCard.tsx
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
    <Card className="flex flex-col overflow-hidden rounded-xl shadow-lg border-2 border-transparent hover:border-brand-accent transition-all duration-300 ease-in-out transform hover:-translate-y-2 group">
        <CardHeader className="p-0">
            <div className="aspect-[2/3] w-full overflow-hidden bg-muted">
                <Image
                    src={book.imageUrl}
                    alt={book.title}
                    width={300}
                    height={450}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
            </div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
            <CardTitle className="text-xl font-semibold leading-tight mb-2 text-brand-foreground">{book.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{book.author}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-4 pt-0">
            <p className="text-2xl font-extrabold text-brand-primary">${book.price.toFixed(2)}</p>
            <Button size="default" className="bg-brand-accent hover:bg-brand-accent/90 text-brand-background font-semibold rounded-full px-5 py-2 shadow-md">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
            </Button>
        </CardFooter>
    </Card>
  );
}