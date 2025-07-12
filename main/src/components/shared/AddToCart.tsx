"use client";

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Book } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

export function AddToCart({ book }: { book: Book }) {
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: { ...book, quantity } });
    toast.success(`${quantity} x ${book.title} added to cart!`);
  }

  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="flex items-center border rounded-full p-1 bg-white/50">
        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-12 text-center text-lg font-bold">{quantity}</span>
        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setQuantity(q => q + 1)}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button 
        size="lg" 
        className="flex-grow bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base h-14 rounded-full shadow-lg shadow-primary/20 btn-shine" 
        onClick={handleAddToCart}
      >
        <ShoppingCart className="mr-2 h-5 w-5" />
        Add to Cart
      </Button>
    </div>
  );
}