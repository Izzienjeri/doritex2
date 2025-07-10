"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 text-center bg-dot-grid">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="bg-card/80 backdrop-blur-md p-10 md:p-16 rounded-2xl border"
      >
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 10 }}>
          <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Thank You For Your Order!
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-10">
          Your order has been placed successfully. You will receive a confirmation email shortly with the order details.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base h-14 px-8 rounded-full shadow-lg shadow-primary/20 btn-shine">
                <Link href="/books">Continue Shopping</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-full text-base font-bold">
                <Link href="/profile/orders">View Order History</Link>
            </Button>
        </div>
      </motion.div>
    </div>
  )
}
