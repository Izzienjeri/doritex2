"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { User, FileText } from "lucide-react"; 

const sidebarNavItems = [
  { title: "My Profile", href: "/profile", icon: User },
  { title: "Order History", href: "/profile/orders", icon: FileText },
];

export default function ProfileLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // In a real app with server-side auth, this redirect would happen in middleware
    if (user === null) {
      router.push('/login');
    }
  }, [user, router]);
  
  if (!user) {
    return <div className="container py-24 text-center">Loading or redirecting...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 bg-dot-grid">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">My Account</h1>
        <p className="text-muted-foreground mt-2">Manage your profile and view your order history.</p>
      </div>
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/4">
          <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
            {sidebarNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted",
                  pathname === item.href && "bg-muted font-bold text-primary"
                )}
              >
                <item.icon className="h-5 w-5"/>
                <span className="hidden sm:inline">{item.title}</span>
              </Link>
            ))}
          </nav>
        </aside>
        <div className="flex-1 lg:max-w-4xl">{children}</div>
      </div>
    </div>
  );
}
