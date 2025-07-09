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
import { cn } from '@/lib/utils';

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

  const springConfig = { stiffness: 150, damping: 20 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-200, 200], [-12, 12]);
  const rotateY = useTransform(springX, [-200, 200], [12, -12]);
  
  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: '1000px' }}
      className="relative h-full"
    >
      <Link href={`/books/${book.id}`} className="block h-full group" tabIndex={0}>
        <Card className={cn(
          "flex h-full flex-col overflow-hidden rounded-xl border-none relative preserve-3d",
          "bg-card/80 backdrop-blur-sm border border-white/10",
          "transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/20"
        )}>
          <div 
            className="absolute inset-0 bg-card/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ transform: "translateZ(20px)" }}
          />

          <CardHeader className="p-0 relative" style={{ transform: "translateZ(60px)" }}>
            <div className="aspect-[3/4] w-full overflow-hidden rounded-t-xl">
              <Image
                src={book.imageUrl}
                alt={book.title}
                width={400}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </CardHeader>
          <CardContent 
            className="flex-grow p-4 flex flex-col relative z-10 bg-transparent"
            style={{ transform: "translateZ(40px)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 font-sans">{book.category}</p>
            <CardTitle className="text-base font-bold leading-snug mb-2 text-foreground/90 flex-grow group-hover:text-primary transition-colors">{book.title}</CardTitle>
            <p className="text-sm text-muted-foreground font-sans">by {book.author}</p>
          </CardContent>
          <CardFooter 
            className="flex justify-between items-center p-4 pt-2 bg-transparent z-10"
            style={{ transform: "translateZ(50px)" }}
          >
            <p className="text-base font-bold text-foreground font-sans">Kshs {book.price.toFixed(2)}</p>
            <Button
              size="icon"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-9 w-9 shrink-0 sm:h-10 sm:w-10"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}