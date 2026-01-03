"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";

interface CardProps {
    title: string;
    value: string;
    index: number;
}

const Card = ({ title, value, index }: CardProps) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 400, damping: 40 });
    const mouseY = useSpring(y, { stiffness: 400, damping: 40 });

    const rotateX = useTransform(mouseY, [-80, 80], [10, -10]);
    const rotateY = useTransform(mouseX, [-80, 80], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;

        x.set(mouseXFromCenter);
        y.set(mouseYFromCenter);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Alternating Tilts: Right, Left, Right
    const tilts = [6, -6, 6];
    const baseRotation = tilts[index % tilts.length];

    // Horizontal Staggering: Right, Left, Right
    // index 0: Right (+x), index 1: Left (-x), index 2: Right (+x)
    const xOffsets = [30, -30, 30];
    const baseX = xOffsets[index % xOffsets.length];

    // Vertical overlap
    const marginTop = index === 0 ? "0px" : "-50px";

    return (
        <motion.div
            initial={{ opacity: 0, x: baseX + 20, y: 20, rotateZ: baseRotation }}
            animate={{ opacity: 1, x: baseX, y: 0, rotateZ: baseRotation }}
            whileHover={{
                scale: 1.1,
                zIndex: 30,
                rotateZ: 0,
                x: 0, // Center on hover for focus
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                marginTop: marginTop,
            }}
            className="relative group cursor-default"
        >
            {/* Subtle Glow Effect */}
            <div className="absolute -inset-0.5bg-gradient-to-br from-white/10 to-transparent rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Main Card Body */}
            <div
                style={{ transform: "translateZ(30px)" }}
                className="relative flex flex-col justify-between w-52 h-32 p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
            >
                <div className="space-y-0.5">
                    <p className="text-[9px] font-medium text-white/40 uppercase tracking-[0.15em]">
                        {title}
                    </p>
                    <h3 className="text-lg font-semibold text-white tracking-tight">
                        {value}
                    </h3>
                </div>

                <div className="flex items-center justify-between mt-2">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                    <div className="ml-3 w-6 h-6 rounded-full border border-white/5 flex items-center justify-center bg-white/5">
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function AboutCards() {
    const cards = [
        { title: "Country", value: "Netherlands" },
        { title: "Job", value: "Software Developer" },
        { title: "Age", value: "22" },
    ];

    return (
        <div className="relative flex flex-col items-center justify-center p-20 min-h-[550px] [perspective:1200px]">
            {/* Minimal background ambient light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="flex flex-col items-center py-12">
                {cards.map((card, index) => (
                    <Card key={card.title} {...card} index={index} />
                ))}
            </div>
        </div>
    );
}
