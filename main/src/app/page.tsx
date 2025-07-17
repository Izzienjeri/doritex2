"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookCheck,
  CheckCircle,
  Rocket,
  FileText,
  Smartphone,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/layout/HeroBackground";
import dynamic from "next/dynamic";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const FeaturedBooks = dynamic(
  () => import("@/components/shared/FeaturedBooks").then((mod) => mod.FeaturedBooks),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 w-full flex items-center justify-center">
        <p>Loading publications...</p>
      </div>
    ),
  }
);

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
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
              className="mt-8 flex flex-wrap justify-center gap-4 text-white/80 font-medium"
            >
              <span className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" /> KICD-approved
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <BookCheck className="h-5 w-5 text-accent" /> CBC-aligned
              </span>
              <span>|</span>
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
                className="bg-accent hover:bg-accent/90 text-primary-foreground font-bold h-16 px-10 rounded-full shadow-lg shadow-accent/30"
              >
                <Link href="/books">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
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

      {/* FEATURED BOOKS */}
      <FeaturedBooks />

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-dot-grid">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              🗣️ What Our Customers Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            {["Mr. Otieno", "Sarah", "Mrs. Kamau"].map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <Card className="bg-white/60 backdrop-blur border shadow-xl p-6 h-full flex flex-col justify-between">
                  <CardContent className="p-0">
                    <p className="text-lg italic text-foreground/80">
                      ❝ Sample feedback from {name} ❞
                    </p>
                  </CardContent>
                  <footer className="mt-6">
                    <p className="font-bold text-primary">{name}</p>
                    <p className="text-sm text-muted-foreground">Customer</p>
                  </footer>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 bg-background/80 border-t">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              🎓 About Doritex Publishers
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-card-foreground/80 leading-relaxed mb-6">
                Doritex Publishers is a Kenyan-owned company with 10+ years
                experience creating quality, CBC-aligned books.
              </p>
              <div className="font-bold text-lg text-primary space-x-4">
                <span>🏆 CBC-aligned</span>
                <span>✅ KICD Approved</span>
                <span>🚚 Delivered Nationwide</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="blob-container aspect-square md:aspect-video border bg-muted"
            >
              <Image
                src="/image7.png"
                alt="Creative activities for students"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
