"use client"

import HeroBackground from "@/components/HeroBackground";
import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import {Linkedin} from "lucide-react";

export default function HeroSection(){
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            <HeroBackground />

            <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-200px)]">
                    {/* Left Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h1
                            className="text-6xl md:text-7xl font-bold leading-none tracking-tighter"
                            style={{ fontFamily: "Silkscreen, monospace" }}
                        >
                            JOCHEM
                            <br />
                            MEURER
                        </h1>

                        <p className="text-sm md:text-base text-muted-foreground max-w-lg font-mono leading-relaxed">
                            Software Developer based in the Netherlands. Building clean,
                            efficient, and scalable digital solutions.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button
                                size="lg"
                                className="rounded-none bg-white text-black hover:bg-white/90 text-xs uppercase tracking-widest h-12 px-8"
                                asChild
                            >
                                <a href="#about">About_Me</a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-none border-white/20 hover:bg-white/10 text-xs uppercase tracking-widest h-12 px-8"
                                asChild
                            >
                                <a
                                    href="https://www.linkedin.com/in/jochem-meurer/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Side - Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-96 lg:h-full min-h-96 flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-sm">
                            {/* Decorative code-style frame */}
                            <div className="absolute -inset-4 border-2 border-white/20 rotate-3"></div>
                            <div className="absolute -inset-2 border border-white/10 -rotate-2"></div>

                            {/* Main image container */}
                            <div className="relative bg-black/60 border border-white/20 overflow-hidden aspect-square">
                                <img
                                    src="/profile.jpg"
                                    alt="Jochem Meurer"
                                    className="w-full h-full object-cover"
                                />
                                {/* Code-style overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                <div className="absolute top-0 left-0 right-0 h-8 bg-black/40 border-b border-white/10 flex items-center px-3 gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
                                    <span className="text-[10px] text-white/40 ml-auto font-mono">
                        profile.png
                      </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}