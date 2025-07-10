"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCart } from "@/context/CartContext"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { state } = useCart()
  const router = useRouter()
  const { items } = state

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 500.00 : 0
  const total = subtotal + shipping

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/order/confirmation');
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 bg-dot-grid">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 text-center">Checkout</h1>
      {items.length === 0 ? (
        <div className="text-center">
          <p className="text-xl text-muted-foreground">Your cart is empty. Please add books to proceed.</p>
        </div>
      ) : (
      <form onSubmit={handlePlaceOrder} className="grid lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 space-y-10">
          <Card className="bg-card/80 border">
            <CardHeader><CardTitle className="text-2xl">Shipping & Delivery</CardTitle></CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2"><Label htmlFor="name">Full Name</Label><Input id="name" required /></div>
              <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" required /></div>
              <div className="col-span-full space-y-2"><Label htmlFor="address">Address</Label><Input id="address" required /></div>
              <div className="space-y-2"><Label htmlFor="city">City</Label><Input id="city" required /></div>
              <div className="space-y-2"><Label htmlFor="zip">ZIP Code</Label><Input id="zip" required /></div>
            </CardContent>
          </Card>
          <Card className="bg-card/80 border">
            <CardHeader><CardTitle className="text-2xl">M-Pesa Payment</CardTitle></CardHeader>
            <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">You will receive an STK Push on your phone to complete the payment.</p>
                <div className="space-y-2">
                    <Label htmlFor="phone">M-Pesa Phone Number</Label>
                    <Input id="phone" placeholder="e.g. 0712345678" required />
                </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="bg-card/80 border sticky top-28 shadow-lg">
            <CardHeader><CardTitle className="text-2xl">Order Summary</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                {items.map(item => (
                  <div key={item.id} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                        <Image src={item.imageUrl} alt={item.title} width={40} height={60} className="rounded" />
                        <div>
                            <p className="font-semibold text-foreground">{item.title}</p>
                            <p className="text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                    </div>
                    <p className="font-semibold text-foreground">Kshs {(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2 text-md border-t border-border pt-4">
                <div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span className="font-semibold text-foreground">Kshs {subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-muted-foreground"><span>Shipping</span><span className="font-semibold text-foreground">Kshs {shipping.toFixed(2)}</span></div>
                <div className="flex justify-between font-bold text-xl mt-2 text-foreground"><span>Total</span><span>Kshs {total.toFixed(2)}</span></div>
              </div>
               <Button type="submit" size="lg" className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base h-14 rounded-full shadow-lg shadow-primary/20 btn-shine">
                  Place Order
                </Button>
            </CardContent>
          </Card>
        </div>
      </form>
      )}
    </div>
  )
}
