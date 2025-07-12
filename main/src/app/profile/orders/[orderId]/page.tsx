"use client";
import { useParams } from "next/navigation";
import { dummyOrders } from "@/lib/data";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const statusSteps = ['Placed', 'Processing', 'Shipped', 'Delivered'];

export default function OrderDetailsPage() {
  const params = useParams();
  const order = dummyOrders.find(o => o.id === params.orderId);

  if (!order) {
    return <div>Order not found.</div>;
  }
  
  const currentStatusIndex = statusSteps.indexOf(order.status);

  return (
    <div className="space-y-8">
      <Card className="bg-card/80 border">
        <CardHeader>
          <CardTitle>Order #{order.id}</CardTitle>
          <CardDescription>Date: {order.date} · Status: {order.status}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Order Status</h3>
            <div className="flex justify-between">
              {statusSteps.map((step, index) => (
                <div key={step} className="flex-1 flex flex-col items-center relative">
                  <div className={cn(
                      "h-8 w-8 rounded-full flex items-center justify-center border-2",
                      index <= currentStatusIndex ? "bg-primary border-primary text-white" : "bg-muted border-border"
                  )}>
                    {index < currentStatusIndex ? '✓' : index + 1}
                  </div>
                  <p className={cn("mt-2 text-sm", index <= currentStatusIndex ? "font-bold text-primary" : "text-muted-foreground")}>{step}</p>
                  {index < statusSteps.length - 1 && (
                      <div className="absolute top-4 left-1/2 w-full h-0.5 -z-10">
                          <div className={cn("h-full", index < currentStatusIndex ? 'bg-primary' : 'bg-border')}></div>
                      </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <Separator className="my-6" />

          <h3 className="text-lg font-semibold mb-4">Items Ordered</h3>
          <div className="space-y-4">
            {order.items.map(item => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image src={item.imageUrl} alt={item.title} width={60} height={90} className="rounded-md" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold">Kshs {(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          
          <Separator className="my-6" />

          <div className="flex justify-end">
            <div className="w-full max-w-xs space-y-2">
                <div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span>Kshs {(order.total - 500).toFixed(2)}</span></div>
                <div className="flex justify-between text-muted-foreground"><span>Shipping</span><span>Kshs 500.00</span></div>
                <Separator/>
                <div className="flex justify-between font-bold text-lg"><span>Total</span><span>Kshs {order.total.toFixed(2)}</span></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
