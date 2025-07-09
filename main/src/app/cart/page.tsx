"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function CartPage() {
  const { state, dispatch } = useCart();
  const { items } = state;

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };
  
  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 5.00 : 0;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">Shopping Cart</h1>
      
      {items.length === 0 ? (
        <div className="text-center py-20 bg-muted/30 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty.</h2>
          <p className="text-muted-foreground mb-8">
  Looks like you haven&apos;t added any books yet.
</p>

          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base h-14 px-8 rounded-full shadow-lg shadow-primary/20 btn-shine">
            <Link href="/books">Explore Books</Link>
          </Button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {items.map(item => (
              <Card key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center p-4 gap-4 bg-card/80 border-white/10">
                <Image src={item.imageUrl} alt={item.title} width={100} height={150} className="rounded-md object-cover self-center sm:self-start shrink-0" />
                <div className="flex-grow w-full">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">by {item.author}</p>
                    <p className="text-lg font-bold text-primary mt-2">Kshs {item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-4 self-stretch sm:self-center justify-end w-full sm:w-auto">
                    <div className="flex items-center border border-input rounded-full p-1">
                        <Button variant="ghost" size="icon" className="rounded-full h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-bold">{item.quantity}</span>
                        <Button variant="ghost" size="icon" className="rounded-full h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive" onClick={() => removeItem(item.id)}>
                        <Trash2 className="h-5 w-5" />
                    </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-card/80 backdrop-blur-sm border-white/10 shadow-xl shadow-black/20 sticky top-28">
              <CardHeader>
                <CardTitle className="text-2xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg">
                <div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span>Kshs {subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-muted-foreground"><span>Shipping</span><span>Kshs {shipping.toFixed(2)}</span></div>
                <hr className="border-border" />
                <div className="flex justify-between font-bold text-xl"><span>Total</span><span>Kshs {total.toFixed(2)}</span></div>
              </CardContent>
              <CardFooter>
                 <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base h-14 rounded-full shadow-lg shadow-primary/20 btn-shine">
                    <Link href="/checkout">
                        Proceed to Checkout <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                 </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}