"use client"

import { motion } from "framer-motion"

export default function EducationSection(){
    return (
        <section id="education" className="container mx-auto px-4 py-24 border-t border-white/5 max-w-5xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase tracking-tight mb-2">
                    03 // Education
                </h2>
                <div className="h-px w-24 bg-white"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    {
                        school: "Deltion College",
                        degree: "Mbo niveau 4 - Software Developer",
                        period: "2020 - 2023",
                        status: "COMPLETED"
                    },
                    {
                        school: "Ichthus College Kampen",
                        degree: "TL Diploma",
                        period: "2016 - 2020",
                        status: "COMPLETED"
                    }
                ].map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="border border-white/10 p-8 hover:bg-white/5 transition-colors"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold font-heading">{edu.school}</h3>
                            <div className="text-[10px] border border-white/20 px-2 py-1 uppercase tracking-widest text-white/60">
                                {edu.status}
                            </div>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">{edu.degree}</div>
                        <div className="text-xs text-white/40 font-mono">{edu.period}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}