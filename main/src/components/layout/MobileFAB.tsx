"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Home,
  LogIn,
  Menu,
  User,
  X,
  Heart,
  ShoppingCart,
  Shield,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export function MobileFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const { state } = useCart();
  const pathname = usePathname();

  const cartItemCount = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Close FAB on route change
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/books", icon: BookOpen, label: "Books" },
    { href: "/parents", icon: Heart, label: "Parents" },
    { href: "/cart", icon: ShoppingCart, label: "Cart", badge: cartItemCount },
    user
      ? { href: "/profile", icon: User, label: "Profile" }
      : { href: "/login", icon: LogIn, label: "Login" },
    user?.isAdmin
      ? { href: "/admin", icon: Shield, label: "Admin" }
      : null,
  ].filter(Boolean) as { href: string; icon: React.ElementType; label: string, badge?: number }[];

  const fabVariants = {
    open: {
      rotate: 45,
      scale: 0.9,
    },
    closed: {
      rotate: 0,
      scale: 1,
    },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0, scale: 1 },
    closed: { opacity: 0, y: 20, scale: 0.5, transition: { duration: 0.2 } },
  };

  return (
    <div className="lg:hidden" aria-label="Mobile Navigation Menu">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
            className="flex flex-col items-center gap-4"
            animate={isOpen ? "open" : "closed"}
        >
             <AnimatePresence>
              {isOpen && navItems.slice(0).reverse().map((item, index) => (
                  <motion.div
                    key={item.href}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ type: "spring", stiffness: 300, damping: 24, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                     <div className="bg-card text-card-foreground p-2 rounded-lg shadow-md text-sm font-semibold">
                        {item.label}
                     </div>
                    <Button
                        asChild
                        size="icon"
                        className="rounded-full h-12 w-12 shadow-lg bg-card text-primary hover:bg-muted relative"
                        onClick={() => setIsOpen(false)}
                    >
                        <Link href={item.href}>
                            <item.icon className="h-6 w-6" />
                            {item.badge && item.badge > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-xs font-bold text-white">
                                    {item.badge}
                                </span>
                            )}
                        </Link>
                    </Button>
                  </motion.div>
                ))}
            </AnimatePresence>

            <motion.div variants={fabVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                    size="icon"
                    className={cn(
                        "h-16 w-16 rounded-full bg-accent hover:bg-accent/90 transition-shadow duration-300",
                        !isOpen && "animate-pulse-fab"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-controls="fab-menu"
                >
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div
                            key={isOpen ? 'close' : 'open'}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                        </motion.div>
                    </AnimatePresence>
                </Button>
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
