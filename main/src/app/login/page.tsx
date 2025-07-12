// === app/login/page.tsx (MODIFIED) ===
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";
import { mockUsers } from "@/lib/data"; // Import the mock user data

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Find the user in our mock data array
    const foundUser = mockUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      // If user is found and password matches, log them in
      login({ name: foundUser.name, email: foundUser.email, isAdmin: foundUser.isAdmin });
      toast.success(`Welcome back, ${foundUser.name}!`);
      
      // Redirect to admin dashboard or profile page based on role
      if (foundUser.isAdmin) {
        router.push('/admin');
      } else {
        router.push('/profile');
      }
    } else {
      // If no user is found, show an error message
      toast.error("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-dot-grid">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="w-full bg-card/80 backdrop-blur-sm border-white/10 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
            <CardDescription className="text-muted-foreground pt-2">
              Sign in to continue your journey.
              <br />
              (user: user@example.com, admin: admin@example.com. pw: pass123)
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold btn-shine">
                Login
              </Button>
              <p className="text-sm text-muted-foreground">
                Don’t have an account?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-primary hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}