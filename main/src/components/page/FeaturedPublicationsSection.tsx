"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FeaturedBooks } from "@/components/shared/FeaturedBooks";

export function FeaturedPublicationsSection() {
  return (
    <section id="publications" className="py-16 sm:py-20 md:py-28 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-center">
          <div className="lg:col-span-5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                Our Featured Publications
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-8">
                Explore our KICD-approved collection, designed to spark
                creativity and make learning an exciting adventure for every
                student in Kenya.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 sm:h-14 px-8 text-base rounded-full shadow-lg shadow-primary/20 transition-transform hover:scale-105"
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
  );
}
