// app/page.tsx
import { Button } from "@/components/ui/button";
import { BookCard } from "@/components/shared/BookCard";
import { dummyBooks, dummyCategories } from "@/lib/data";
import { ArrowRight, BookOpen, Lightbulb, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function HomePage() {
  const featuredBooks = dummyBooks.filter(book => book.isFeatured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-brand-secondary via-brand-primary to-brand-tertiary text-white overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "url('/images/pattern.svg')", backgroundSize: "cover" }}></div>
          
          <div className="container mx-auto text-center z-10 relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6 drop-shadow-lg animate-fade-in-down">
                  Unlock Your Potential with Doritex Publishing
              </h1>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-background/90 mb-10 animate-fade-in-up">
                  Discover a curated collection of academic and professional publications designed to empower your learning journey and fuel your growth.
              </p>
              <Button size="lg" className="bg-brand-accent hover:bg-brand-accent/90 text-brand-background font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in">
                  Explore Our Collection
                  <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
          </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16 md:py-24 bg-brand-background">
          <div className="container mx-auto">
              <h2 className="text-4xl font-bold tracking-tight text-center mb-16 text-brand-foreground">
                  Featured Publications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {featuredBooks.map((book) => (
                      <BookCard key={book.id} book={book} />
                  ))}
              </div>
              <div className="text-center mt-16">
                <Button variant="outline" size="lg" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-background transition-colors duration-300 rounded-full px-8 py-3">
                  View All Books
                </Button>
              </div>
          </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-background to-brand-secondary/10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-center mb-16 text-brand-foreground">
            Browse By Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyCategories.map((category) => (
              <Link href="#" key={category.name} className="block group">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    width={600}
                    height={400}
                    className="object-cover w-full h-48 sm:h-64 transition-transform duration-500 group-hover:scale-105 brightness-75 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors duration-300">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Us/Mission Section */}
      <section className="py-16 md:py-24 bg-brand-tertiary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-8">
            Our Mission: Empowering Minds
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-brand-background/90 leading-relaxed mb-12">
            At Doritex Publishing Investments, we believe in the transformative power of knowledge. 
            Our mission is to provide high-quality, accessible educational resources that inspire 
            curiosity, foster critical thinking, and empower individuals to achieve their academic and professional goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <BookOpen className="h-12 w-12 text-brand-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Vast Collection</h3>
              <p className="text-sm text-brand-background/70">Explore a diverse range of subjects and authors.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <Lightbulb className="h-12 w-12 text-brand-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Content</h3>
              <p className="text-sm text-brand-background/70">Carefully curated and peer-reviewed publications.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <TrendingUp className="h-12 w-12 text-brand-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Continuous Growth</h3>
              <p className="text-sm text-brand-background/70">Supporting your lifelong learning journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter/Call to Action Section */}
      <section className="py-16 md:py-24 bg-brand-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Stay Updated with New Releases!
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-brand-background/90 mb-8">
            Subscribe to our newsletter and get the latest information on new books, special offers, and exclusive content delivered right to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow p-4 rounded-full border-2 border-white/30 bg-white/20 text-white placeholder-white/80 focus:outline-none focus:border-white transition-all duration-300"
            />
            <Button type="submit" size="lg" className="bg-brand-foreground hover:bg-brand-foreground/90 text-brand-background font-bold text-lg px-8 py-3 rounded-full shadow-lg">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}