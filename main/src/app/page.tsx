"use client";
import { Button } from "@/components/ui/button";
import { BookCard } from "@/components/shared/BookCard";
import { dummyBooks } from "@/lib/data";
import { ArrowRight, BookOpen, Droplet, Edit } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { HeroBackground } from "@/components/layout/HeroBackground";

export default function HomePage() {
  const allBooks = dummyBooks;

  const sentence = "Gateway to Educational Excellence.".split(" ");

  const sentenceVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, staggerChildren: 0.08 },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };


  return (
    <div className="flex flex-col">
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <HeroBackground />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    className="text-5xl sm:text-7xl font-bold tracking-tighter md:text-8xl !text-white"
                    style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)'}}
                    variants={sentenceVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {sentence.map((word, index) => (
                        <motion.span key={word + "-" + index} className="inline-block mr-[0.25em]">
                            {word.split("").map((char, charIndex) => (
                                <motion.span key={char + "-" + charIndex} variants={letterVariants}>
                                    {char}
                                </motion.span>
                            ))}
                        </motion.span>
                    ))}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-6 text-lg text-white/80 md:text-xl max-w-2xl mx-auto font-sans"
                >
                    A curated collection where every page is a new discovery. Your journey into knowledge begins with a single drop of ink.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-10"
                >
                    <Button size="lg" asChild className="text-primary-foreground font-bold text-base h-16 px-10 rounded-full shadow-lg shadow-primary/30 btn-shine transform hover:scale-105 transition-transform duration-300">
                        <Link href="/books">
                            Explore The Collection <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative z-10 bg-background/80 backdrop-blur-sm border-t border-b">
        <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter">
                    Featured Publications
                </h2>
                <p className="text-muted-foreground text-lg mt-4 mb-16 font-sans">
                    Each book is a vessel of knowledge, meticulously crafted from ink and inspiration.
                </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-12">
                {allBooks.slice(0, 5).map((book) => (
                    <BookCard book={book} key={book.id} />
                ))}
            </div>
        </div>
      </section>

      <section id="about" className="py-24 md:py-32 overflow-hidden relative">
        <div className="container mx-auto text-center px-4 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                The Publisher's Mark
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-card-foreground/70 leading-relaxed mb-20 font-sans">
                Our philosophy is built on three foundational marks, each representing our commitment to quality, creativity, and growth.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: BookOpen, title: "Curated Canon", desc: "A focused curriculum, a universe of knowledge." },
              { icon: Droplet, title: "Purity of Ink", desc: "Peer-reviewed publications that are clear and potent." },
              { icon: Edit, title: "The Written Future", desc: "Supporting your lifelong journey of learning." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="group p-8 rounded-2xl transition-all duration-300 border border-transparent hover:border-primary/20 hover:bg-white/50"
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <div className="flex flex-col items-center gap-5">
                  <div className="flex-shrink-0 rounded-full bg-primary/10 p-4 border border-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                    <item.icon className="h-10 w-10 text-primary transition-all duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-accent">{item.title}</h3>
                    <p className="text-sm text-card-foreground/70 font-sans leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
