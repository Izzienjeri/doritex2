"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ShoppingCart, User as UserIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/#about", label: "About" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { state } = useCart();
  const { user, logout } = useAuth(); // Use auth context
  const cartItemCount = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  
  const handleLogout = () => {
    logout();
    router.push('/');
  }

  const BrandLogo = () => (
    <Link href="/" className="flex items-center" onClick={() => isOpen && setIsOpen(false)}>
      <Image
        src="/logo2.png"
        alt="Doritex Logo"
        width={160}
        height={45}
        priority
        className="h-11 w-auto"
      />
    </Link>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl shadow-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <BrandLogo />
          </div>

          <nav className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base font-medium text-foreground/70 transition-colors hover:text-foreground link-underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2">
              {user ? (
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="rounded-full font-medium flex items-center gap-2">
                        <UserIcon className="h-4 w-4"/>
                        My Account
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuLabel>Hi, {user.name}!</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild><Link href="/profile">My Profile</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild><Link href="/profile/orders">Order History</Link></DropdownMenuItem>
                      {user.isAdmin && (
                        <>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild><Link href="/admin">Admin Dashboard</Link></DropdownMenuItem>
                        </>
                      )}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout} className="text-destructive cursor-pointer">
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
              ) : (
                <>
                  <Button variant="ghost" className="font-medium rounded-full" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-full shadow-lg shadow-primary/20" asChild>
                    <Link href="/register">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>

            <Button variant="outline" size="icon" className="rounded-full relative flex-shrink-0 bg-white/50" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-xs font-bold text-white">
                    {cartItemCount}
                  </span>
                )}
                <span className="sr-only">Shopping Cart</span>
              </Link>
            </Button>
            
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full bg-white/50">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[90%] sm:max-w-sm bg-background/95 backdrop-blur-xl flex flex-col p-0">
                  <SheetHeader className="p-6 border-b">
                    <SheetTitle asChild><Link href="/" onClick={() => setIsOpen(false)}><Image src="/logo2.png" alt="Doritex Logo" width={160} height={45} className="h-11 w-auto" /></Link></SheetTitle>
                    <SheetDescription className="sr-only">Mobile navigation menu</SheetDescription>
                  </SheetHeader>
                  <nav className="flex flex-col gap-2 text-lg p-4 flex-grow">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.label}>
                        <Link href={link.href} className="font-semibold text-foreground/80 transition-colors hover:text-primary py-3 rounded-lg px-4 hover:bg-muted">
                            {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                     {user && (
                        <SheetClose asChild>
                         <Link href="/profile" className="font-semibold text-foreground/80 transition-colors hover:text-primary py-3 rounded-lg px-4 hover:bg-muted">My Account</Link>
                        </SheetClose>
                     )}
                  </nav>
                  <div className="mt-auto flex flex-col gap-3 p-6 border-t bg-muted/30">
                    {user ? (
                        <Button variant="destructive" size="lg" className="h-12 text-base" onClick={() => { handleLogout(); setIsOpen(false); }}>Logout</Button>
                    ) : (
                        <>
                            <SheetClose asChild><Button asChild variant="outline" size="lg" className="h-12 text-base"><Link href="/login">Login</Link></Button></SheetClose>
                            <SheetClose asChild><Button asChild size="lg" className="bg-primary h-12 text-base text-primary-foreground font-bold"><Link href="/register">Sign Up</Link></Button></SheetClose>
                        </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
