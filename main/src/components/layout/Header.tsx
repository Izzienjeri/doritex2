"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, ShoppingCart } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-24 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/doritex-logo.png" 
            alt="Doritex Logo" 
            width={180} 
            height={28}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-medium text-foreground transition-colors hover:text-[--color-brand-primary]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground hover:bg-muted rounded-full">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" className="text-foreground hover:bg-muted font-semibold rounded-full">Login</Button>
          <Button className="bg-[--color-brand-primary] hover:bg-[--color-brand-primary]/90 text-white font-semibold px-6 rounded-full shadow-sm">Sign Up</Button>
          <Button variant="outline" size="icon" className="rounded-full border-muted-foreground/50 hover:bg-muted">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full border-muted-foreground/50">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[90%] sm:max-w-sm bg-background flex flex-col p-0">
              <div className="p-6 border-b">
                 <Image 
                    src="/doritex-logo.png" 
                    alt="Doritex Logo" 
                    width={180} 
                    height={28}
                  />
              </div>
              <nav className="flex flex-col gap-2 text-lg p-4 flex-grow">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-bold text-foreground transition-colors hover:text-[--color-brand-primary] py-3 rounded-md px-4 hover:bg-muted"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 p-6 border-t bg-muted/50">
                <Button variant="outline" size="lg" className="h-12 text-base" onClick={() => setIsOpen(false)}>Login</Button>
                <Button size="lg" className="bg-[--color-brand-primary] h-12 text-base text-white font-bold" onClick={() => setIsOpen(false)}>Sign Up</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}