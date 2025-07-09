"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#", label: "Books" },
  { href: "#", label: "Categories" },
  { href: "#", label: "About" },
  { href: "#", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-lg">
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
          <Button variant="ghost" className="text-foreground font-medium rounded-full">
            Login
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-full btn-shine">
            Sign Up
          </Button>
          <Button variant="secondary" size="icon" className="rounded-full">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[90%] sm:max-w-sm bg-background flex flex-col p-0">
              <div className="p-6 border-b flex justify-between items-center">
                <span className="text-2xl font-bold font-display text-primary">
                  Doritex
                </span>
              </div>
              <nav className="flex flex-col gap-2 text-lg p-4 flex-grow">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-semibold text-foreground transition-colors hover:text-primary py-3 rounded-lg px-4 hover:bg-muted"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 p-6 border-t bg-muted/30">
                <Button variant="outline" size="lg" className="h-12 text-base" onClick={() => setIsOpen(false)}>Login</Button>
                <Button size="lg" className="bg-primary h-12 text-base text-primary-foreground font-bold btn-shine" onClick={() => setIsOpen(false)}>Sign Up</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}