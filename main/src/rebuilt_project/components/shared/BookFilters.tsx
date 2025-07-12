"use client";

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { dummyBooks } from '@/lib/data';

const categories = ['All', ...Array.from(new Set(dummyBooks.map(b => b.category)))];

export function BookFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const activeCategory = searchParams.get('category') || 'All';

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleCategoryChange = (category: string) => {
     const params = new URLSearchParams(searchParams);
    if (category && category !== 'All') {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="space-y-10">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input 
          placeholder="Search by title or author..."
          className="pl-12 h-14 text-lg bg-card border-border focus-visible:ring-primary focus-visible:ring-offset-background rounded-full shadow-sm"
          defaultValue={searchParams.get('query')?.toString()}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
       <div className="flex justify-center flex-wrap gap-3">
        {categories.map(category => (
          <Button 
            key={category} 
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => handleCategoryChange(category)}
            className={cn(
              "rounded-full px-6 h-11 text-base font-semibold",
              activeCategory === category && "bg-primary text-primary-foreground"
            )}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}
