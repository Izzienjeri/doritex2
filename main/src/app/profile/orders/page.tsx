"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dummyOrders } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function OrderHistoryPage() {
  const orders = dummyOrders;

  if (orders.length === 0) {
    return (
      <div className="text-center py-20 bg-muted rounded-lg border">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">You have no orders yet.</h2>
        <p className="text-muted-foreground mb-8">
          All your future orders will appear here.
        </p>
        <Button asChild size="lg">
          <Link href="/books">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <Card className="bg-card/80 border">
      <CardHeader>
        <CardTitle>Your Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order) => (
            <Link href={`/profile/orders/${order.id}`} key={order.id} className="block border rounded-lg p-4 hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-center">
                <div className="grid gap-1">
                  <p className="font-bold text-lg text-primary">Order #{order.id}</p>
                  <p className="text-sm text-muted-foreground">Date: {order.date}</p>
                  <p className="text-sm text-muted-foreground">Total: Kshs {order.total.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-4">
                    <span className={cn(
                        "text-sm font-bold py-1 px-3 rounded-full",
                        order.status === 'Delivered' && 'bg-green-100 text-green-800',
                        order.status === 'Processing' && 'bg-yellow-100 text-yellow-800',
                        order.status === 'Shipped' && 'bg-accent/10 text-primary'
                    )}>
                        {order.status}
                    </span>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
