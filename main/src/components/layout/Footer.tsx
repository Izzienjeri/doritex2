import Link from "next/link";
import { Twitter, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0D0E13] text-muted-foreground relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 opacity-[0.02] bg-dot-grid"></div>
      <div className="container mx-auto relative py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left max-w-5xl mx-auto">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block text-2xl font-bold font-display uppercase tracking-widest text-primary">
              Doritex
            </Link>
            <p className="text-sm leading-relaxed mt-4 font-sans max-w-xs mx-auto md:mx-0">
              Your Gateway to Educational Excellence.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-base mb-4 text-foreground/80 font-display uppercase tracking-wider">
              Links
            </h4>
            <ul className="space-y-3 text-sm font-sans">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/books" className="hover:text-primary transition-colors">Books</Link></li>
              <li><Link href="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-base mb-4 text-foreground/80 font-display uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm font-sans">
              <li><a href="mailto:investments.doritex@gmail.com" className="hover:text-primary transition-colors">investments.doritex@gmail.com</a></li>
              <li><a href="tel: +254 722 316 210" className="hover:text-primary transition-colors">+254 722 316 210</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-base mb-4 text-foreground/80 font-display uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link href="#" className="hover:text-primary hover:scale-110 transition-all"><Twitter size={22} /></Link>
              <Link href="#" className="hover:text-primary hover:scale-110 transition-all"><Facebook size={22} /></Link>
              <Link href="#" className="hover:text-primary hover:scale-110 transition-all"><Linkedin size={22} /></Link>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground/60 font-sans">
          <p>© {new Date().getFullYear()} Doritex Investments Limited. All Rights Reserved.</p>
          <p className="mt-2">Created by <Link href="https://izziedevs.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">IzzieDevs</Link></p>
        </div>
      </div>
    </footer>
  );
}