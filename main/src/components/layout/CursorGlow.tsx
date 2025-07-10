"use client";

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CursorGlow = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            id="cursor-glow"
            style={{
                x: springX,
                y: springY,
            }}
            className="opacity-0"
        />
    );
};
