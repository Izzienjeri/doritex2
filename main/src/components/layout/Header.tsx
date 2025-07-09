// components/layout/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#", label: "Books" },
  { href: "#", label: "Categories" },
  { href: "#", label: "About Us" },
  { href: "#", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-brand-background/95 backdrop-blur supports-[backdrop-filter]:bg-brand-background/60 shadow-md">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Assuming you have a logo that works well on a light background */}
          <Image 
            src="/doritex-logo.png" 
            alt="Doritex Logo" 
            width={200} 
            height={32} 
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-medium text-brand-foreground transition-colors hover:text-brand-accent relative 
                         after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-brand-accent 
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-brand-foreground hover:bg-brand-primary/10 hover:text-brand-primary">Login</Button>
          <Button className="bg-brand-accent hover:bg-brand-primary text-brand-background font-bold px-6 py-2 rounded-full shadow-lg transition-all duration-300">Sign Up</Button>
          <Button variant="outline" size="icon" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-background transition-colors duration-300">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-brand-primary text-brand-primary">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-3/4 bg-brand-background border-l-4 border-brand-primary flex flex-col">
              <div className="flex justify-center mb-10 mt-6">
                 <Image 
                    src="/doritex-logo.png" 
                    alt="Doritex Logo" 
                    width={200} 
                    height={32}
                  />
              </div>
              <nav className="flex flex-col gap-6 text-xl px-6 flex-grow">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-semibold text-brand-foreground transition-colors hover:text-brand-accent py-2 border-b border-border/40 last:border-b-0"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-4 p-6">
                <Button variant="ghost" className="text-lg text-brand-foreground hover:bg-brand-primary/10 hover:text-brand-primary" onClick={() => setIsOpen(false)}>Login</Button>
                <Button className="bg-brand-accent hover:bg-brand-primary text-brand-background font-bold text-lg px-6 py-3 rounded-full shadow-lg" onClick={() => setIsOpen(false)}>Sign Up</Button>
                <Button variant="outline" size="lg" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-background transition-colors duration-300 mt-2" onClick={() => setIsOpen(false)}>
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Cart
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}