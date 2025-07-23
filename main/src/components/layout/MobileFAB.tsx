"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  Home,
  LogIn,
  Menu,
  User,
  X,
  Heart,
  Shield,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export function MobileFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/books", icon: BookOpen, label: "Books" },
    { href: "/parents", icon: Heart, label: "Parents" },
    user
      ? { href: "/profile", icon: User, label: "Profile" }
      : { href: "/login", icon: LogIn, label: "Login" },
    user?.isAdmin ? { href: "/admin", icon: Shield, label: "Admin" } : null,
  ].filter(Boolean) as {
    href: string;
    icon: React.ElementType;
    label: string;
  }[];

  return (
    <div className="lg:hidden" aria-label="Mobile Navigation Menu">
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex flex-col items-center gap-4">
          <div
            id="fab-menu"
            className={cn(
              "flex flex-col items-center gap-4 transition-opacity duration-300 ease-in-out",
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            )}
          >
            {navItems.slice().reverse().map((item) => (
              <div key={item.href} className="flex items-center gap-3">
                <div className="bg-card text-card-foreground p-2 rounded-lg shadow-md text-sm font-semibold">
                  {item.label}
                </div>
                <Button
                  asChild
                  size="icon"
                  className="relative rounded-full h-12 w-12 shadow-lg bg-card text-primary hover:bg-muted"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={item.href}>
                    <item.icon className="h-6 w-6" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          <Button
            size="icon"
            className={cn(
              "h-16 w-16 rounded-full bg-accent hover:bg-accent/90 transition-transform duration-300 transform",
              isOpen ? "rotate-45 scale-90" : "scale-100",
              !isOpen && "animate-pulse-fab"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="fab-menu"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
