"use client";

import dynamic from 'next/dynamic';

const MobileFAB = dynamic(() =>
  import('@/components/layout/MobileFAB').then(mod => mod.MobileFAB),
  { ssr: false }
);

export function MobileFABLoader() {
  return <MobileFAB />;
}
