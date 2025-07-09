import React, { useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { toast } from "sonner";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: book });
    toast.success(`${book.title} added to cart!`);
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const springConfig = { stiffness: 300, damping: 20 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-150, 150], [-10, 10]);
  const rotateY = useTransform(springX, [-150, 150], [10, -10]);
  
  return (
    <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            perspective: '1000px'
        }}
        className="relative h-full"
    >
      <Link href={`/books/${book.id}`} className="block h-full" tabIndex={0}>
        <div className="p-px bg-gradient-to-br from-white/10 to-transparent rounded-xl h-full group transition-all duration-300 hover:from-primary/50 hover:to-secondary/50 preserve-3d">
          <Card
            style={{ transform: "translateZ(40px)" }} 
            className="flex h-full flex-col overflow-hidden rounded-lg bg-card border-none relative preserve-3d"
          >
            <CardHeader className="p-0 relative z-10" style={{ transform: "translateZ(50px)" }}>
              <div className="aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={book.imageUrl}
                  alt={book.title}
                  width={400}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-4 flex flex-col relative z-0 bg-card">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 font-sans">{book.category}</p>

              <CardTitle className="text-base font-bold leading-snug mb-2 text-foreground/90 flex-grow group-hover:text-primary transition-colors">{book.title}</CardTitle>
              <p className="text-sm text-muted-foreground font-sans">by {book.author}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4 pt-2 bg-card/80">
              <p className="text-base sm:text-lg font-bold text-foreground font-sans">Kshs {book.price.toFixed(2)}</p>
              <Button
                size="icon"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-10 w-10 shrink-0"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Link>
    </motion.div>
  );
}