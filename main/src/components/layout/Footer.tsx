import Link from "next/link";
import Image from "next/image";
import { Twitter, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white/80 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 opacity-[0.02] bg-dot-grid"></div>
      <div className="container mx-auto relative py-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 max-w-7xl mx-auto">
          
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <Link href="/" className="inline-block">
              <Image
                src="/logo2.png"
                alt="Doritex Logo"
                width={160}
                height={45}
                className="h-11 w-auto filter brightness-0 invert mx-auto sm:mx-0"
              />
            </Link>
            <p className="text-sm leading-relaxed mt-4 font-sans max-w-xs mx-auto sm:mx-0">
              Your Gateway to Educational Excellence.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base mb-4 text-white font-display uppercase tracking-wider">
              Links
            </h4>
            <ul className="space-y-3 text-sm font-sans">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/books" className="hover:text-accent transition-colors">Books</Link></li>
              <li><Link href="/parents" className="hover:text-accent transition-colors">Parents Hub</Link></li>
              <li><Link href="/#about" className="hover:text-accent transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base mb-4 text-white font-display uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm font-sans break-words">
              <li>
                <a href="mailto:investments.doritex@gmail.com" className="hover:text-accent transition-colors">
                  investments.doritex@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+254722316210" className="hover:text-accent transition-colors">
                  +254 722 316 210
                </a>
              </li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base mb-4 text-white font-display uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex justify-center sm:justify-start gap-4">
              <Link href="#" className="hover:text-accent hover:scale-110 transition-all" aria-label="Follow us on Twitter"><Twitter size={22} /></Link>
              <Link href="#" className="hover:text-accent hover:scale-110 transition-all" aria-label="Follow us on Facebook"><Facebook size={22} /></Link>
              <Link href="#" className="hover:text-accent hover:scale-110 transition-all" aria-label="Connect with us on LinkedIn"><Linkedin size={22} /></Link>
            </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-white/60 font-sans">
          <p>© {new Date().getFullYear()} Doritex Investments Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}