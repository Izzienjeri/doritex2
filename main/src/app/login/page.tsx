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
import { mockUsers } from "@/lib/data";
import { AlertCircle } from "lucide-react";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for inline error message

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Clear previous errors on a new attempt

    const foundUser = mockUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      // Success: Log user in and show a success toast
      login({ name: foundUser.name, email: foundUser.email, isAdmin: foundUser.isAdmin });
      toast.success(`Welcome back, ${foundUser.name}!`);
      
      if (foundUser.isAdmin) {
        router.push('/admin');
      } else {
        router.push('/profile');
      }
    } else {
      // Failure: Set the inline error message instead of showing a toast
      setError("Invalid email or password. Please try again.");
      setPassword(''); // Clear password field for security
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
                <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => { setEmail(e.target.value); setError(''); }} required/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value); setError(''); }} required />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              {error && (
                <div className="w-full flex items-center gap-2 rounded-lg bg-destructive/10 p-3 text-sm font-medium text-destructive">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <p>{error}</p>
                </div>
              )}
              <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                Login
              </Button>
              <p className="text-sm text-muted-foreground">
                Don&rsquo;t have an account?{" "}
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
