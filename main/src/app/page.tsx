"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookCheck,
  CheckCircle,
  Rocket,
  Smartphone,
  Truck,
  Heart,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/layout/HeroBackground";
import dynamic from "next/dynamic";
import Image from "next/image";

const FeaturedBooks = dynamic(
  () =>
    import("@/components/shared/FeaturedBooks").then(
      (mod) => mod.FeaturedBooks
    ),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 w-full flex items-center justify-center bg-muted/30 rounded-xl">
        <p className="text-muted-foreground">Loading publications...</p>
      </div>
    ),
  }
);

export default function HomePage() {
  const whyChooseUsPoints = [
    {
      icon: CheckCircle,
      title: "KICD Approved",
      description: "Our content is 100% CBC-aligned and fully approved, ensuring quality and relevance for Kenyan learners.",
    },
    {
      icon: Lightbulb,
      title: "Fosters Real Creativity",
      description: "We go beyond textbooks with practical, hands-on activities that build critical thinking and innovation.",
    },
    {
      icon: Heart,
      title: "Makes Learning Fun",
      description: "With engaging illustrations and exciting tasks, we turn education into an adventure children love.",
    },
  ];

  return (
    <div className="flex flex-col bg-background">
      <section className="container mx-auto px-4 pt-24 pb-16 md:pt-40 md:pb-32">
        <div
          className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-primary text-center shadow-xl shadow-primary/30 border border-white/10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
            backgroundSize: "1.5rem 1.5rem",
          }}
        >
          <HeroBackground />
          <div className="relative z-10 max-w-4xl px-4 py-28 md:py-40">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight md:text-6xl text-white drop-shadow-lg"
            >
              📘 Champion Creative Series
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-xl md:text-2xl max-w-2xl mx-auto text-white/90 uppercase tracking-wider"
            >
              Kenya’s Trusted CBC Creative Arts Books for Grades 1–8
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 font-medium"
            >
              <span className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" /> KICD-approved
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-2">
                <BookCheck className="h-5 w-5 text-accent" /> CBC-aligned
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-accent" /> Boosts creativity
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-col items-center gap-6"
            >
              <Button
                size="lg"
                asChild
                className="bg-accent hover:bg-accent/90 text-primary-foreground font-bold h-16 px-10 text-lg rounded-full shadow-lg shadow-accent/30 transition-transform hover:scale-105"
              >
                <Link href="/books">
                  Explore The Books <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-sm text-white/70 flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Truck className="h-4 w-4" /> Fast delivery across Kenya
                </span>
                <span className="flex items-center gap-1.5">
                  <Smartphone className="h-4 w-4" /> Call/WhatsApp to order
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="publications" className="py-24 md:py-32 bg-muted/30 overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-center">
      <div className="lg:col-span-5 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary mb-4">
            Our Featured Publications
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            Explore our KICD-approved collection, designed to spark
            creativity and make learning an exciting adventure for every
            student in Kenya.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-8 text-base rounded-full shadow-lg shadow-primary/20 transition-transform hover:scale-105"
          >
            <Link href="/books">
              Explore All Books <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <div className="lg:col-span-7">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="absolute -inset-8 sm:-inset-12 z-0">
        
            <div className="absolute inset-0 bg-gradient-to-br from-muted/0 via-muted/0 to-muted/80 rounded-3xl"></div>
          </div>

          <div className="relative z-10">
            <FeaturedBooks />
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              className="relative w-full h-[400px] md:h-[500px] lg:col-span-5 lg:order-last"
              initial={{ opacity: 0, x: 80, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/1.jpg"
                alt="A happy Kenyan student participating in creative activities"
                fill
                className="object-cover"
                style={{ clipPath: "url(#shape-blob-right)" }}
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
            </motion.div>
            <div className="text-center md:text-left lg:col-span-7 lg:-ml-0 relative z-10">
              <motion.h2
                className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Built for the Modern Learner
              </motion.h2>
              <ul className="space-y-8">
                {whyChooseUsPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                  >
                    <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                      <point.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold">{point.title}</h3>
                      <p className="text-muted-foreground mt-1">{point.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 md:py-32 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:order-last text-center md:text-left lg:col-span-7 lg:-mr-0 relative z-10">
              <motion.h2
                className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Mission & Vision
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Doritex Publishers is a proudly Kenyan-owned company with over a decade of experience. Our mission is to create high-quality, affordable, and engaging educational materials that empower the next generation of creative thinkers and problem-solvers.
              </motion.p>
              <motion.div
                className="mt-8 flex justify-center md:justify-start flex-wrap gap-4 font-semibold text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="flex items-center gap-2"><BookCheck className="h-5 w-5" /> CBC-aligned</span>
                <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5" /> KICD Approved</span>
                <span className="flex items-center gap-2"><Truck className="h-5 w-5" /> Nationwide Delivery</span>
              </motion.div>
            </div>
            <motion.div
              className="relative w-full h-[400px] md:h-[500px] lg:col-span-5"
              initial={{ opacity: 0, x: -80, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/2.jpg"
                alt="A teacher guiding students in a classroom"
                fill
                className="object-cover"
                style={{ clipPath: "url(#shape-blob-left)" }}
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-dot-grid">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Loved by Parents and Teachers
            </h2>
            <p className="text-lg text-muted-foreground">
              Don&apos;t just take our word for it. Here&apos;s what people are saying.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            {[
              { name: "Mrs. Kamau", role: "Parent, Grade 3", quote: "The Champion Creative book is fantastic! My son is always excited to do the activities, and it has really boosted his confidence in art." },
              { name: "Mr. Otieno", role: "Teacher, Upper Primary", quote: "As an educator, I appreciate how well-structured and aligned with the CBC curriculum these books are. They are a valuable resource in my classroom." },
              { name: "Sarah W.", role: "Parent, Grade 1 & 4", quote: "We have the books for both our children. The quality is excellent, and the delivery was so fast. Highly recommended for any parent." }
            ].map((testimonial, i) => (
              <motion.figure
                key={i}
                className="bg-white/80 backdrop-blur-sm border rounded-2xl p-8 shadow-lg transition-all duration-300 ease-out"
                initial={{ opacity: 0, y: 40, scale: 0.9, rotate: i === 1 ? 0 : (i === 0 ? -5 : 5) }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: i === 1 ? 2 : (i === 0 ? -2 : 3) }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 * i }}
              >
                <blockquote className="text-lg text-foreground/80 italic">
                  <p>❝ {testimonial.quote} ❞</p>
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <svg className="absolute w-0 h-0">
        <defs>
          <clipPath id="shape-blob-left" clipPathUnits="objectBoundingBox">
            <path d="M0.81,0.11 C0.93,0.25,0.97,0.5,0.92,0.69 C0.87,0.88,0.72,1.01,0.54,1.02 C0.35,1.03,0.13,0.92,0.04,0.74 C-0.05,0.56,-0.02,0.3,0.11,0.16 C0.24,0.02,0.51,-0.06,0.68,0.03 C0.77,0.08,0.81,0.11,0.81,0.11 Z"></path>
          </clipPath>
          <clipPath id="shape-blob-right" clipPathUnits="objectBoundingBox">
            <path d="M0.11,0.15 C0.25,0.03,0.48,-0.02,0.65,0.04 C0.82,0.1,0.93,0.27,0.95,0.46 C0.97,0.65,0.9,0.84,0.77,0.94 C0.64,1.04,0.44,1.05,0.27,0.97 C0.1,0.89,-0.04,0.72,0,0.52 C0.04,0.32,0.08,0.2,0.11,0.15 Z"></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}