"use client";
import { Button } from "@/components/ui/button";
import { BookCard } from "@/components/shared/BookCard";
import { Book, dummyBooks, dummyCategories } from "@/lib/data";
import { ArrowRight, BookOpen, Lightbulb, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants, Transition } from "framer-motion";
import { useEffect, useState } from "react";

const BookImage = ({ book }: { book: Book }) => (
  <div className="relative shadow-2xl shadow-black/50 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-primary/30">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50" />
    <Image
      src={book.imageUrl}
      alt={book.title}
      width={300}
      height={450}
      className="object-cover w-full h-full"
    />
  </div>
);


export default function HomePage() {
  const featuredBooks = dummyBooks.filter((book) => book.isFeatured);
  const heroBooks = dummyBooks.slice(0, 3);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      if (!rect) return;
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setMousePosition({ x, y });
    };

    const heroElement = document.getElementById("interactive-hero");
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemSpringTransition: Transition = {
    type: "spring",
    stiffness: 100,
    damping: 15,
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: itemSpringTransition },
  };
  
  const floatingVariants: Variants = {
    animate: (i: number) => ({
      y: [0, -10, 0, 10, 0],
      rotate: [0, i % 2 === 0 ? 3 : -3, 0],
      transition: {
        duration: 12 + i * 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="flex flex-col">
      <section
        id="interactive-hero"
        className="interactive-aurora w-full overflow-hidden"
        style={
          {
            "--x": `${
              (mousePosition.x /
                (typeof window !== "undefined"
                  ? document.getElementById("interactive-hero")?.clientWidth || 1
                  : 1)) * 100
            }%`,
            "--y": `${
              (mousePosition.y /
                (typeof window !== "undefined"
                  ? document.getElementById("interactive-hero")?.clientHeight || 1
                  : 1)) * 100
            }%`,
          } as React.CSSProperties
        }
      >
        <div className="absolute inset-0 opacity-20 bg-dot-grid"></div>
        <div className="container relative z-10 mx-auto min-h-[90vh] flex items-center px-4">
          <div className="max-w-3xl text-left z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl font-bold tracking-tighter text-white md:text-7xl lg:text-8xl"
            >
              Gateway to <span className="text-primary">Educational</span> Excellence.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-lg text-white/80 md:text-xl max-w-2xl font-sans"
            >
              Discover a curated collection of academic and professional publications designed to empower your learning journey and fuel your growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10"
            >
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base h-14 px-8 rounded-full shadow-lg shadow-primary/20 btn-shine">
                <Link href="/books">
                  Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden lg:block z-0">
            <motion.div variants={floatingVariants} animate="animate" custom={0} className="absolute top-[15%] right-[40%] w-48">
              <BookImage book={heroBooks[0]} />
            </motion.div>
            <motion.div variants={floatingVariants} animate="animate" custom={1} className="absolute top-[45%] right-[10%] w-56">
              <BookImage book={heroBooks[1]} />
            </motion.div>
            <motion.div variants={floatingVariants} animate="animate" custom={2} className="absolute top-[65%] right-[50%] w-40">
              <BookImage book={heroBooks[2]} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 -z-10 bg-dot-grid [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-4 text-foreground">
            Featured Publications
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-20 max-w-2xl mx-auto font-sans">
            Handpicked selections from our experts to kickstart your intellectual adventure.
          </p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {featuredBooks.map((book) => (
              <motion.div key={book.id} variants={itemVariants}>
                <BookCard book={book} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-dot-grid"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-20 text-foreground">
            Browse By Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyCategories.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Link href="#" className="block group relative overflow-hidden rounded-2xl shadow-lg">
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <Image
                      src={category.imageUrl}
                      alt={category.name}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
                  <div className="relative h-80 p-6 flex flex-col justify-end">
                    <h3 className="text-3xl font-bold text-white drop-shadow-md transition-transform duration-500 group-hover:-translate-y-2">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 text-white overflow-hidden relative bg-animated-gradient">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/subtle-prism.png')` }}
        ></div>
        <div className="container mx-auto text-center px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Our Mission: Empowering Minds
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-white/70 leading-relaxed mb-20 font-sans">
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
              { icon: BookOpen, title: "Vast Collection", desc: "Explore a diverse range of subjects and authors." },
              { icon: Lightbulb, title: "Quality Content", desc: "Carefully curated and peer-reviewed publications." },
              { icon: TrendingUp, title: "Continuous Growth", desc: "Supporting your lifelong learning journey." },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="bg-white/10 p-8 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-primary hover:-translate-y-2 hover:shadow-primary/20"
              >
                <div className="mb-5 inline-block rounded-full bg-white/10 p-4">
                  <item.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-white/60 font-sans">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto text-center px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground">
            Stay Ahead of the Curve
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 font-sans">
            Join our newsletter for updates on new releases, exclusive offers, and insights from leading academics.
          </p>
          <form className="relative max-w-lg mx-auto mt-12 group">
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full p-4 pr-36 rounded-full border-2 bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/20 transition-all duration-300 h-16 text-base font-sans"
            />
            <Button
              type="submit"
              size="lg"
              className="absolute top-2 right-2 bottom-2 bg-gradient-to-r from-secondary to-tertiary hover:shadow-lg hover:shadow-tertiary/40 text-white font-bold h-auto px-7 rounded-full btn-shine transition-transform duration-300 group-hover:scale-105"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}