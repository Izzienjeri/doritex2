"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookCheck,
  CheckCircle,
  Rocket,
  Truck,
} from "lucide-react";
import Link from "next/link";
import dynamic from 'next/dynamic';

const HeroBackground = dynamic(() => 
  import('@/components/layout/HeroBackground').then(mod => mod.HeroBackground)
);

export function HeroSection() {
  return (
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
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight md:text-6xl text-white drop-shadow-lg">
            Champion Creative Series
          </h1>
          
          <p
            className="mt-6 text-xl md:text-2xl max-w-2xl mx-auto text-white/90 uppercase tracking-wider animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Kenya’s Trusted CBC Creative Arts Books for Grades 1–8
          </p>

          <div
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/80 font-medium animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
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
          </div>

          <div
            className="mt-10 flex flex-col items-center gap-6 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-16 px-10 text-lg rounded-full shadow-lg shadow-primary/30 transition-transform hover:scale-105"
            >
              <Link href="/books">
                Explore The Books <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm text-white/70 flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Truck className="h-4 w-4" /> Fast delivery across Kenya
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
