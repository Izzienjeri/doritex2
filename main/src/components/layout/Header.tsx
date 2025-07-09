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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-24 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-foreground">Doritex</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" className="text-foreground font-medium rounded-full">Login</Button>
          <Button className="bg-[--color-brand-primary] hover:bg-[--color-brand-primary]/90 text-white font-semibold px-6 rounded-full btn-shine">Sign Up</Button>
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
                 <span className="text-2xl font-bold text-foreground">Doritex</span>
              </div>
              <nav className="flex flex-col gap-2 text-lg p-4 flex-grow">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-semibold text-foreground transition-colors hover:text-[--color-brand-primary] py-3 rounded-lg px-4 hover:bg-muted"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 p-6 border-t bg-muted/30">
                <Button variant="outline" size="lg" className="h-12 text-base" onClick={() => setIsOpen(false)}>Login</Button>
                <Button size="lg" className="bg-[--color-brand-primary] h-12 text-base text-white font-bold btn-shine" onClick={() => setIsOpen(false)}>Sign Up</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}