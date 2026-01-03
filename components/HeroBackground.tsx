"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface SymbolItem {
    symbol: string;
    top: string;
    left: string;
    fontSize: string;
    font?: string;
    duration?: number;
}

export default function HeroBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        containerRef.current.style.background = "#000";
    }, []);

    const symbols: SymbolItem[] = [
        { symbol: "//", top: "20%", left: "10%", fontSize: "6xl" },
        { symbol: "{}", top: "50%", left: "70%", fontSize: "8xl" },
        { symbol: "<>", top: "75%", left: "30%", fontSize: "5xl" },
        { symbol: "()", top: "15%", left: "60%", fontSize: "5xl" },
        { symbol: ";", top: "40%", left: "25%", fontSize: "6xl" },
        { symbol: "var", top: "60%", left: "80%", fontSize: "7xl" },
        { symbol: "#", top: "80%", left: "15%", fontSize: "5xl" },
        { symbol: "<h1>", top: "10%", left: "40%", fontSize: "6xl" },
        { symbol: "<h3>", top: "35%", left: "60%", fontSize: "5xl" },
        { symbol: "<div>", top: "65%", left: "20%", fontSize: "6xl" },
        // Filler on the right side
        { symbol: "const", top: "25%", left: "85%", fontSize: "4xl" },
        { symbol: "function", top: "50%", left: "90%", fontSize: "5xl" },
        { symbol: "<p>", top: "70%", left: "75%", fontSize: "5xl" },
        { symbol: "return", top: "40%", left: "80%", fontSize: "4xl" },
    ];


    return (
        <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
            {/* Rotating grid lines */}
            <motion.div
                className="absolute w-[200%] h-[200%] border border-white/5 top-[-50%] left-[-50%] pointer-events-none"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute w-[250%] h-[250%] border-t border-l border-white/5 top-[-75%] left-[-75%] pointer-events-none"
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            />

            {/* Map over symbols */}
            {symbols.map((item, index) => (
                <motion.span
                    key={index}
                    className={`${item.font ?? "font-mono"} text-white/5 text-${item.fontSize} absolute`}
                    style={{ top: item.top, left: item.left }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: item.duration ?? 2 }}
                >
                    {item.symbol}
                </motion.span>
            ))}
        </div>
    );
}
