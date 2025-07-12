// === app/admin/layout.tsx (NEW FILE) ===
"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { LayoutDashboard, Book, ShoppingBag, Settings, Home } from "lucide-react";

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
    // Protect admin routes
    if (!user || !user.isAdmin) {
      router.push('/login');
    }
  }, [user, router]);
  
  if (!user || !user.isAdmin) {
    return <div className="container py-24 text-center">Access Denied. Redirecting...</div>;
  }

  return (
    <div className="bg-muted/40 min-h-screen">
      <div className="container mx-auto grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <aside className="hidden border-r bg-background md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-16 items-center border-b px-6">
                    <Link href="/admin" className="font-bold text-lg text-primary">Admin Panel</Link>
                </div>
                <nav className="flex-1 grid items-start p-4 text-sm font-medium">
                    {sidebarNavItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                        pathname === item.href && "bg-muted text-primary"
                        )}
                    >
                        <item.icon className="h-4 w-4"/>
                        {item.title}
                    </Link>
                    ))}
                    <Link href="/" className="mt-auto flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"><Home className="h-4 w-4"/> Back to Site</Link>
                </nav>
            </div>
        </aside>
        <main className="flex flex-col gap-4 p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}