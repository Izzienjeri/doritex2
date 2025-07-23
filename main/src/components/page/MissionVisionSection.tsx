"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookCheck, CheckCircle, Truck } from "lucide-react";

export function MissionVisionSection() {
  return (
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
  );
}
