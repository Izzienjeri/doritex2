import dynamic from 'next/dynamic';
import { HeroSection } from "@/components/page/HeroSection";
import { Skeleton } from '@/components/ui/skeleton';

const FeaturedPublicationsSection = dynamic(() =>
  import('@/components/page/FeaturedPublicationsSection').then(mod => mod.FeaturedPublicationsSection),
  { loading: () => <Skeleton className="h-[500px] w-full" /> }
);
const ModernLearnerSection = dynamic(() =>
  import('@/components/page/ModernLearnerSection').then(mod => mod.ModernLearnerSection),
  { loading: () => <Skeleton className="h-[500px] w-full" /> }
);
const MissionVisionSection = dynamic(() =>
  import('@/components/page/MissionVisionSection').then(mod => mod.MissionVisionSection),
  { loading: () => <Skeleton className="h-[500px] w-full" /> }
);
const TestimonialsSection = dynamic(() =>
  import('@/components/page/TestimonialsSection').then(mod => mod.TestimonialsSection),
  { loading: () => <Skeleton className="h-[500px] w-full" /> }
);

export default function HomePage() {
  return (
    <div className="flex flex-col bg-background">
      <HeroSection />
      <FeaturedPublicationsSection />
      <ModernLearnerSection />
      <MissionVisionSection />
      <TestimonialsSection />

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
