"use client";
import { Button } from "@/components/ui/button";
import { BookCard } from "@/components/shared/BookCard";
import { dummyBooks, dummyCategories } from "@/lib/data";
import { ArrowRight, BookOpen, Lightbulb, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  const featuredBooks = dummyBooks.filter(book => book.isFeatured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-28 md:py-36 lg:py-48 text-white overflow-hidden gradient-mesh">
        <div className="container mx-auto text-center z-10 relative px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 text-shadow-lg"
          >
            Unlock Your Potential with Doritex
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 mb-12"
          >
            Discover a curated collection of academic and professional publications designed to empower your learning journey and fuel your growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            <Button size="lg" asChild className="bg-white hover:bg-white/90 text-[--color-brand-text] font-bold text-lg px-8 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Link href="/books">
                Explore Our Collection <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-4 text-[--color-brand-text]">
            Featured Publications
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Handpicked selections from our experts to kickstart your intellectual adventure.
          </p>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {featuredBooks.map((book) => (
              <motion.div key={book.id} variants={itemVariants}>
                <BookCard book={book} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-16 text-[--color-brand-text]">
            Browse By Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyCategories.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href="#" className="block group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
                  <div className="relative">
                    <Image
                      src={category.imageUrl}
                      alt={category.name}
                      width={600}
                      height={400}
                      className="object-cover w-full h-72 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                      <h3 className="text-3xl font-bold text-white drop-shadow-md">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[--color-brand-tertiary] text-white relative overflow-hidden">
        <div className="absolute -inset-40 opacity-10 bg-[radial-gradient(circle_at_50%_50%,#fff,transparent_40%)] animate-[spin_20s_linear_infinite]"></div>
        <div className="container mx-auto text-center relative px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Our Mission: Empowering Minds
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-white/80 leading-relaxed mb-16">
            At Doritex, we believe in the transformative power of knowledge. Our mission is to provide high-quality, accessible educational resources that inspire curiosity and empower individuals to achieve their goals.
          </p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
             {[
                { icon: BookOpen, title: 'Vast Collection', desc: 'Explore a diverse range of subjects and authors.' },
                { icon: Lightbulb, title: 'Quality Content', desc: 'Carefully curated and peer-reviewed publications.' },
                { icon: TrendingUp, title: 'Continuous Growth', desc: 'Supporting your lifelong learning journey.' },
            ].map((item) => (
                <motion.div key={item.title} variants={itemVariants} className="gradient-border-card flex flex-col items-center text-center p-8 rounded-2xl backdrop-blur-md shadow-lg">
                    <div className="mb-5 rounded-full bg-[--color-brand-primary]/20 p-4">
                      <item.icon className="h-10 w-10 text-[--color-brand-primary]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-white/70">{item.desc}</p>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto text-center px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[--color-brand-text]">
            Stay Ahead of the Curve
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
            Subscribe to our newsletter for new books, special offers, and exclusive content delivered right to your inbox.
          </p>
          <form className="relative max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full p-4 pr-32 rounded-full border-2 bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[--color-brand-primary] focus:ring-4 focus:ring-[--color-brand-primary]/10 transition-all duration-300 h-16 text-base"
            />
            <Button type="submit" size="lg" className="absolute top-2 right-2 bottom-2 bg-[--color-brand-tertiary] hover:bg-[--color-brand-tertiary]/90 text-white font-bold h-auto px-6 rounded-full shadow-lg">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}