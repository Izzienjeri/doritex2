"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import {
  LayoutDashboard,
  Book,
  ShoppingBag,
  Settings,
  Home,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const sidebarNavItems = [
  { title: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { title: "Books", href: "/admin/books", icon: Book },
  { title: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { title: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user || !user.isAdmin) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user || !user.isAdmin) {
    return (
      <div className="container py-24 text-center">
        Access Denied. Redirecting...
      </div>
    );
  }

  const NavContent = () => (
    <nav className="grid items-start p-4 text-sm font-medium">
      {sidebarNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
            pathname === item.href && "bg-muted text-primary"
          )}
        >
          <item.icon className="h-4 w-4" />
          {item.title}
        </Link>
      ))}
      <Link
        href="/"
        className="mt-auto flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <Home className="h-4 w-4" /> Back to Site
      </Link>
    </nav>
  );

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <aside className="hidden border-r bg-background md:block">
        <div className="flex h-full max-h-screen flex-col">
          <div className="flex h-16 items-center border-b px-6">
            <Link href="/admin" className="font-bold text-lg text-primary">
              Admin Panel
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <NavContent />
          </div>
        </div>
      </aside>
      <div className="flex flex-col">
        <header className="flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-0">
              <div className="flex h-16 items-center border-b px-6">
                 <Link href="/admin" className="font-bold text-lg text-primary">
                    <SheetClose>Admin Panel</SheetClose>
                 </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start p-4 text-sm font-medium">
                  {sidebarNavItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                          pathname === item.href && "bg-muted text-primary"
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.title}
                      </Link>
                    </SheetClose>
                  ))}
                   <SheetClose asChild>
                    <Link
                      href="/"
                      className="mt-auto flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                      <Home className="h-4 w-4" /> Back to Site
                    </Link>
                   </SheetClose>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:p-6 bg-muted/30">
          {children}
        </main>
      </div>
    </div>
  );
}
