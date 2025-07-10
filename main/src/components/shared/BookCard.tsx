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
  const { dispatch } = useCart();
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, 350], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 250], [-10, 10]);
  
  const springConfig = { stiffness: 150, damping: 20, mass: 1 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  
  const glareX = useTransform(mouseX, [0, 250], ['-100%', '100%']);
  const glareY = useTransform(mouseY, [0, 350], ['-100%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(125); // Center X
    mouseY.set(175); // Center Y
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "ADD_ITEM", payload: book });
    toast.success(`${book.title} added to cart!`);
  };

  return (
    <div className="perspective-container">
      <Link href={`/books/${book.id}`} className="block group" tabIndex={0}>
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: springRotateX,
            rotateY: springRotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative h-full transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-primary/20"
        >
          <Card className={cn(
            "flex h-full w-full flex-col overflow-hidden rounded-xl",
            "bg-card/80 backdrop-blur-sm border shadow-lg shadow-black/10"
          )}>
            <CardHeader className="p-0 relative" style={{ transform: "translateZ(30px)" }}>
              <div className="aspect-[2/3] w-full overflow-hidden rounded-t-xl">
                  <Image
                    src={book.imageUrl}
                    alt={book.title}
                    width={400}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
              </div>
               <motion.div
                 className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 style={{ 
                   x: glareX,
                   y: glareY,
                   background: "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, transparent 50%)",
                 }}
               />
            </CardHeader>
            <CardContent className="flex-grow p-4 flex flex-col bg-transparent" style={{ transform: "translateZ(20px)" }}>
              <CardTitle className="text-base font-bold leading-snug text-foreground/90 flex-grow group-hover:text-primary transition-colors">{book.title}</CardTitle>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4 pt-2 bg-transparent" style={{ transform: "translateZ(10px)" }}>
              <p className="text-base font-bold text-card-foreground/80 font-sans">Kshs {book.price.toFixed(2)}</p>
              <Button
                size="icon"
                className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full h-10 w-10 shrink-0 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                onClick={handleAddToCart}
                aria-label="Add to cart"
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </Link>
    </div>
  );
}