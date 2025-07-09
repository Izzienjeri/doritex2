// components/layout/Footer.tsx
import Link from "next/link";
import { Twitter, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-brand-primary/20 bg-gradient-to-br from-brand-tertiary to-brand-secondary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
               <Image 
                src="/doritex-logo-white.png" 
                alt="Doritex Logo" 
                width={200} 
                height={32} 
                className="filter brightness-0 invert" /* Adjust for white logo if needed */
              />
            </Link>
            <p className="text-sm text-brand-background/80 leading-relaxed">
              Your Gateway to Educational Excellence. Committed to fostering knowledge and intellectual growth.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-accent">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="text-brand-background/80 hover:text-brand-accent transition-colors duration-200">Home</Link></li>
              <li><Link href="#" className="text-brand-background/80 hover:text-brand-accent transition-colors duration-200">All Books</Link></li>
              <li><Link href="#" className="text-brand-background/80 hover:text-brand-accent transition-colors duration-200">Categories</Link></li>
              <li><Link href="#" className="text-brand-background/80 hover:text-brand-accent transition-colors duration-200">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-accent">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="text-brand-background/80 hover:text-brand-accent transition-colors duration-200">Contact Us</Link></li>
              <li><Link href="#" className="text-brand-background/80 hover:text-brand-accent transition-colors duration-200">FAQ</Link></li>
              <li><Link href="#" className="text-brand-background/80 hover:text-brand-accent transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link href="#" className="text-brand-background/80 hover:text-brand-accent transition-colors duration-200">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-accent">Connect With Us</h4>
            <div className="flex space-x-5">
              <Link href="#" className="text-brand-background/80 hover:text-brand-accent transition-colors duration-200"><Twitter size={24} /></Link>
              <Link href="#" className="text-brand-background/80 hover:text-brand-accent transition-colors duration-200"><Facebook size={24} /></Link>
              <Link href="#" className="text-brand-background/80 hover:text-brand-accent transition-colors duration-200"><Linkedin size={24} /></Link>
            </div>
             <div className="mt-6">
              <h4 className="font-bold text-lg mb-2 text-brand-accent">Contact</h4>
              <p className="text-sm text-brand-background/80">123 Education Lane, Knowledge City, KE</p>
              <p className="text-sm text-brand-background/80">info@doritex.com</p>
              <p className="text-sm text-brand-background/80">+254 7XX XXX XXX</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-brand-primary/30 text-center text-sm text-brand-background/70">
          <p>© {new Date().getFullYear()} Doritex Investments Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}