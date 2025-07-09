import React, { useRef, useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import { Eye, ShoppingCart } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { toast } from "sonner";

interface BookCardProps {
  book: Book;
}

const StaticCard = ({ book }: BookCardProps) => (
  <div className="relative h-full">
    <Link href={`/books/${book.id}`} className="block h-full">
      <div className="p-px bg-gradient-to-br from-white/10 to-transparent rounded-xl h-full group transition-all duration-300 hover:from-primary/50 hover:to-secondary/50">
        <Card className="flex h-full flex-col overflow-hidden rounded-lg bg-card border-none relative">
          <CardHeader className="p-0 relative">
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
          <CardContent className="flex-grow p-5 flex flex-col relative z-0 bg-card">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 font-sans">{book.category}</p>
            <CardTitle className="text-lg font-bold leading-snug mb-2 text-foreground/90 flex-grow">{book.title}</CardTitle>
            <p className="text-sm text-muted-foreground font-sans">by {book.author}</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center p-5 pt-3 bg-card/80">
            <p className="text-xl font-bold text-foreground font-sans">${book.price.toFixed(2)}</p>
          </CardFooter>
        </Card>
      </div>
    </Link>
  </div>
);

export function BookCard({ book }: BookCardProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
  const glareX = useTransform(mouseX, [-150, 150], [-50, 150]);
  const glareY = useTransform(mouseY, [-150, 150], [-50, 150]);

  if (!isMounted) {
    return <StaticCard book={book} />;
  }
  
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
            <motion.div
              style={{
                  x: glareX,
                  y: glareY,
                  background: "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)"
              }}
              className="absolute top-0 left-0 w-48 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
             />
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
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                   <Button
                      size="icon"
                      variant="outline"
                      className="bg-background/50 hover:bg-background border-border hover:border-primary backdrop-blur-sm rounded-full h-12 w-12"
                      tabIndex={-1} 
                   >
                      <Eye className="h-5 w-5" />
                   </Button>
                   <Button
                      size="icon"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 w-12 shadow-lg shadow-primary/30"
                      onClick={handleAddToCart}
                   >
                      <ShoppingCart className="h-5 w-5" />
                   </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-5 flex flex-col relative z-0 bg-card">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 font-sans">{book.category}</p>

              <CardTitle className="text-lg font-bold leading-snug mb-2 text-foreground/90 flex-grow">{book.title}</CardTitle>
              <p className="text-sm text-muted-foreground font-sans">by {book.author}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-5 pt-3 bg-card/80">
              <p className="text-xl font-bold text-foreground font-sans">${book.price.toFixed(2)}</p>
            </CardFooter>
          </Card>
        </div>
      </Link>
    </motion.div>
  );
}