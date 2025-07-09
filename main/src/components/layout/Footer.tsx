// components/layout/Footer.tsx
import Link from "next/link";
import { Twitter, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[--color-brand-tertiary] text-white">
      <div className="container py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
               <Image 
                src="/doritex-logo-white.png" 
                alt="Doritex Logo" 
                width={180} 
                height={28}
              />
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Your Gateway to Educational Excellence. Committed to fostering knowledge and intellectual growth across the globe.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-5 text-[--color-brand-primary]">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors duration-200">All Books</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors duration-200">Categories</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors duration-200">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-5 text-[--color-brand-primary]">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors duration-200">Contact Us</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors duration-200">FAQ</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors duration-200">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-5 text-[--color-brand-primary]">Connect With Us</h4>
            <div className="flex space-x-5">
              <Link href="#" className="text-white/80 hover:text-white transition-colors duration-200"><Twitter size={24} /></Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors duration-200"><Facebook size={24} /></Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors duration-200"><Linkedin size={24} /></Link>
            </div>
             <div className="mt-6 space-y-1">
              <p className="text-sm text-white/70">info@doritex.com</p>
              <p className="text-sm text-white/70">+254 7XX XXX XXX</p>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/20 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Doritex Investments Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}