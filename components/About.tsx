"use client"

import { motion } from "framer-motion";
import {Cpu} from "lucide-react";

export default function AboutSection(){
    return (
        <section id="about" className="container mx-auto px-4 py-24 border-t border-white/5 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase tracking-tight">
                        01 // About_Me
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        I am a curious and driven software developer who enjoys taking initiative and actively contributing ideas.
                        I feel comfortable working both independently and as part of a team, and I value open communication.
                        Asking for help or feedback comes naturally to me, as I see it as an opportunity to grow.
                        I am eager to keep learning and improving my skills by following courses and earning professional certifications.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-4 border border-white/10 bg-white/5">
                            <div className="text-2xl font-bold font-heading mb-1">3+</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider">Years Exp.</div>
                        </div>
                        <div className="p-4 border border-white/10 bg-white/5">
                            <div className="text-2xl font-bold font-heading mb-1">100%</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider">Commitment</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-square max-w-md mx-auto"
                >
                </motion.div>
            </div>
        </section>
    )
}