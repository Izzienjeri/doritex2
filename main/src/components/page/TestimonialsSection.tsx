"use client";

import { motion } from "framer-motion";

const testimonials = [
  { name: "Mrs. Kamau", role: "Parent, Grade 3", quote: "The Champion Creative book is fantastic! My son is always excited to do the activities, and it has really boosted his confidence in art." },
  { name: "Mr. Otieno", role: "Teacher, Upper Primary", quote: "As an educator, I appreciate how well-structured and aligned with the CBC curriculum these books are. They are a valuable resource in my classroom." },
  { name: "Sarah W.", role: "Parent, Grade 1 & 4", quote: "We have the books for both our children. The quality is excellent, and the delivery was so fast. Highly recommended for any parent." }
];

export function TestimonialsSection() {
  return (
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
          {testimonials.map((testimonial, i) => (
            <motion.figure
              key={i}
              className="bg-white/80 backdrop-blur-sm border rounded-2xl p-8 shadow-lg transition-all duration-300 ease-out"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
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
  );
}
