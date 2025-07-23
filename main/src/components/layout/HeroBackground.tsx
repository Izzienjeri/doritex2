"use client";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-primary">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 153, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(15, 31, 104, 0.3)" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 153, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(15, 31, 104, 0.4)" />
          </linearGradient>
        </defs>

        <g className="animate-wave-slow">
          <path
            fill="url(#waveGradient1)"
            d="M -10,300 C 250,200 350,400 600,300 S 900,400 1010,300 V 610 H -10 Z"
          />
        </g>

        <g className="animate-wave-fast">
          <path
            fill="url(#waveGradient2)"
            d="M -10,330 C 200,250 300,430 550,330 S 850,250 1010,310 V 610 H -10 Z"
          />
        </g>
      </svg>
    </div>
  );
}
