"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";
import * as flubber from "flubber";

export function HeroBackground() {
  const wave1Paths = [
    "M -10,150 C 250,50 350,250 600,150 S 900,250 1010,150 V 610 H -10 Z",
    "M -10,150 C 200,100 450,200 600,150 S 850,100 1010,150 V 610 H -10 Z",
    "M -10,150 C 250,50 350,250 600,150 S 900,250 1010,150 V 610 H -10 Z",
  ];

  const wave2Paths = [
    "M -10,180 C 200,100 300,280 550,180 S 850,100 1010,160 V 610 H -10 Z",
    "M -10,180 C 250,150 400,230 550,180 S 800,150 1010,160 V 610 H -10 Z",
    "M -10,180 C 200,100 300,280 550,180 S 850,100 1010,160 V 610 H -10 Z",
  ];

  const wave1 = useMotionValue(wave1Paths[0]);
  const wave2 = useMotionValue(wave2Paths[0]);

  useEffect(() => {
    const wave1Interpolators = wave1Paths.map((_, i) =>
      flubber.interpolate(wave1Paths[i], wave1Paths[(i + 1) % wave1Paths.length])
    );

    const wave2Interpolators = wave2Paths.map((_, i) =>
      flubber.interpolate(wave2Paths[i], wave2Paths[(i + 1) % wave2Paths.length])
    );

    let wave1Index = 0;
    let wave2Index = 0;

    const loopWave = (
      interpolators: ((t: number) => string)[],
      motionValue: typeof wave1,
      indexSetter: (val: number) => void,
      indexGetter: () => number,
      duration = 4000
    ) => {
      const current = indexGetter();
      const next = (current + 1) % interpolators.length;

      animate(0, 1, {
        duration: duration / 1000,
        onUpdate: (t) => {
          motionValue.set(interpolators[current](t));
        },
        onComplete: () => {
          indexSetter(next);
          loopWave(interpolators, motionValue, indexSetter, indexGetter, duration);
        },
      });
    };

    loopWave(wave1Interpolators, wave1, (v) => (wave1Index = v), () => wave1Index);
    loopWave(wave2Interpolators, wave2, (v) => (wave2Index = v), () => wave2Index);
  }, []);

  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-primary">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "rgba(0, 153, 255, 0.5)" }} />
            <stop offset="100%" style={{ stopColor: "rgba(15, 31, 104, 0.3)" }} />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "rgba(0, 153, 255, 0.3)" }} />
            <stop offset="100%" style={{ stopColor: "rgba(15, 31, 104, 0.4)" }} />
          </linearGradient>
        </defs>

        <motion.path fill="url(#waveGradient1)" d={wave1} />
        <motion.path fill="url(#waveGradient2)" d={wave2} />
      </svg>
    </div>
  );
}
