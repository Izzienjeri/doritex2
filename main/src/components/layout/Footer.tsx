import Link from "next/link";
import { Twitter, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <span className="text-2xl font-bold">Doritex</span>
            <p className="text-sm text-background/60 leading-relaxed mt-4">
              Your Gateway to Educational Excellence.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-base mb-4 text-background/80">Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="text-background/60 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#" className="text-background/60 hover:text-white transition-colors">Books</Link></li>
              <li><Link href="#" className="text-background/60 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-base mb-4 text-background/80">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="text-background/60 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-background/60 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-background/60 hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-base mb-4 text-background/80">Connect</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-background/60 hover:text-white transition-colors"><Twitter size={22} /></Link>
              <Link href="#" className="text-background/60 hover:text-white transition-colors"><Facebook size={22} /></Link>
              <Link href="#" className="text-background/60 hover:text-white transition-colors"><Linkedin size={22} /></Link>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-background/20 text-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} Doritex Investments Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}