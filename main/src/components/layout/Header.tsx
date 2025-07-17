"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart, User as UserIcon, Home, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { state } = useCart();
  const { user, logout } = useAuth();
  const cartItemCount = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  
  const handleLogout = () => {
    logout();
    router.push('/');
  }

  const BrandLogo = () => (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo2.png"
        alt="Doritex Logo"
        width={200}
        height={56}
        priority
        className="h-14 w-auto"
      />
    </Link>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full border-b bg-background/80 backdrop-blur-xl shadow-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <BrandLogo />
          </div>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-1 rounded-full bg-primary p-1.5 backdrop-blur-sm border border-white/10 shadow-md">
              <Link
                  href="/"
                  className={cn(
                    "flex items-center justify-center rounded-full px-5 py-2 text-base font-medium transition-all",
                    pathname === "/"
                      ? "bg-white text-primary shadow"
                      : "text-primary-foreground/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  <Home className="mr-2 h-4 w-4" />
                  Home
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                        "flex items-center justify-center rounded-full px-5 py-2 text-base font-medium transition-all",
                        pathname.startsWith("/books")
                        ? "bg-white text-primary shadow"
                        : "text-primary-foreground/80 hover:text-white hover:bg-white/10"
                    )}
                  >
                    Books
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem asChild><Link href="/books">All Books</Link></DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild><Link href="/books?category=Lower+Primary">Lower Primary</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/books?category=Upper+Primary">Upper Primary</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link href="/books?category=Junior+Secondary">Junior Secondary</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/parents"
                className={cn(
                  "flex items-center justify-center rounded-full px-5 py-2 text-base font-medium transition-all",
                  pathname === "/parents"
                    ? "bg-white text-primary shadow"
                    : "text-primary-foreground/80 hover:text-white hover:bg-white/10"
                )}
              >
                Parents Hub
              </Link>
              <Link
                href="/#about"
                className={cn(
                  "flex items-center justify-center rounded-full px-5 py-2 text-base font-medium transition-all",
                  "text-primary-foreground/80 hover:text-white hover:bg-white/10"
                )}
              >
                About
              </Link>
            </div>
          </nav>
          
          {/* --- DESKTOP ACTIONS (Hidden on Mobile) --- */}
          <div className="hidden lg:flex items-center gap-4">
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
          </div>
        </div>
      </div>
    </header>
  );
}
