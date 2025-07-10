"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-accent">
      <motion.svg
        className="w-full h-full"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "rgba(0, 170, 235, 0.5)" }} />
            <stop offset="100%" style={{ stopColor: "rgba(56, 113, 193, 0.3)" }} />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "rgba(0, 170, 235, 0.3)" }} />
            <stop offset="100%" style={{ stopColor: "rgba(46, 49, 146, 0.4)" }} />
          </linearGradient>
        </defs>

        {/* Wave 1 */}
        <motion.path
          fill="url(#waveGradient1)"
          d="M -10,150 C 250,50 350,250 600,150 S 900,250 1010,150 V 610 H -10 Z"
          animate={{
            d: [
              "M -10,150 C 250,50 350,250 600,150 S 900,250 1010,150 V 610 H -10 Z",
              "M -10,150 C 200,100 450,200 600,150 S 850,100 1010,150 V 610 H -10 Z",
              "M -10,150 C 250,50 350,250 600,150 S 900,250 1010,150 V 610 H -10 Z",
            ],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

        {/* Wave 2 */}
        <motion.path
          fill="url(#waveGradient2)"
          d="M -10,180 C 200,100 300,280 550,180 S 850,100 1010,160 V 610 H -10 Z"
          animate={{
            d: [
              "M -10,180 C 200,100 300,280 550,180 S 850,100 1010,160 V 610 H -10 Z",
              "M -10,180 C 250,150 400,230 550,180 S 800,150 1010,160 V 610 H -10 Z",
              "M -10,180 C 200,100 300,280 550,180 S 850,100 1010,160 V 610 H -10 Z",
            ],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 1,
          }}
        />
      </motion.svg>
    </div>
  );
}
