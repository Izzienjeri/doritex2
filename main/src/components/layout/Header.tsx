"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "/books", label: "Books" },
  { href: "/#categories", label: "Categories" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { state } = useCart();
  const cartItemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        hasScrolled ? "border-b border-border bg-background/80 backdrop-blur-lg shadow-lg" : "border-b border-transparent"
    )}>
      <div className="container flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold font-display uppercase tracking-widest text-primary">
            Doritex
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground link-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" className="text-foreground font-medium rounded-full" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-full btn-shine" asChild>
            <Link href="/register">Sign Up</Link>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full relative" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                 <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-xs font-bold text-white">{cartItemCount}</span>
              )}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu (unchanged from original but shown for completeness) */}
        <div className="lg:hidden flex items-center gap-2">
           <Button variant="outline" size="icon" className="rounded-full relative" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                 <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-xs font-bold text-white">{cartItemCount}</span>
              )}
            </Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[90%] sm:max-w-sm bg-background/95 backdrop-blur-xl flex flex-col p-0 border-l border-border"
            >
              <div className="p-6 border-b border-border flex justify-between items-center">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <span className="text-2xl font-bold font-display text-primary">
                    Doritex
                  </span>
                </Link>
              </div>
              <nav className="flex flex-col gap-2 text-lg p-4 flex-grow">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-semibold text-foreground/80 transition-colors hover:text-primary py-3 rounded-lg px-4 hover:bg-muted"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 p-6 border-t border-border bg-muted/30">
                <Button variant="outline" size="lg" className="h-12 text-base" onClick={() => setIsOpen(false)} asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button size="lg" className="bg-primary h-12 text-base text-primary-foreground font-bold btn-shine" onClick={() => setIsOpen(false)} asChild>
                  <Link href="/register">Sign Up</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}