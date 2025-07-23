"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Heart, Lightbulb } from "lucide-react";

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

export function ModernLearnerSection() {
  return (
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
  );
}
