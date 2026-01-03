"use client"

import { motion } from "framer-motion"
import {ExternalLinkIcon} from "lucide-react";

const certificates = [
    {
        name: "Linux Foundation Certified System Administrator (LFCS)",
        issuer: "Linux Foundation",
        issuerLink: "https://training.linuxfoundation.org/certification/linux-foundation-certified-sysadmin-lfcs/",
        status: "IN_PROGRESS",
        date: "2026"
    }
]

export default function CertificatesSection(){
    return (
        <section id="certificates" className="container mx-auto px-4 py-24 border-t border-white/5 max-w-5xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase tracking-tight mb-2">
                    04 // Certificates
                </h2>
                <div className="h-px w-24 bg-white"></div>
            </motion.div>

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/40 to-white/20"></div>

                {/* Certificates list */}
                <div className="space-y-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-16"
                        >
                            {/* Timeline dot */}
                            <div className={`absolute left-0 top-2 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                                cert.status === "COMPLETED"
                                    ? "border-green-500/50 bg-green-500/10"
                                    : "border-blue-500/50 bg-blue-500/10"
                            }`}>
                                <div className={`w-3 h-3 rounded-full ${
                                    cert.status === "COMPLETED"
                                        ? "bg-green-500/60"
                                        : "bg-blue-500/60"
                                }`}></div>
                            </div>

                            {/* Content */}
                            <div className="border border-white/10 p-6 hover:border-white/30 hover:bg-white/5 transition-all">
                                <div className="flex justify-between items-start gap-3 mb-3">
                                    <div className="flex-1">
                                        <h3 className="text-sm font-bold font-heading leading-tight">{cert.name}</h3>
                                    </div>
                                    <div className={`text-[9px] border px-2 py-1 uppercase tracking-widest whitespace-nowrap ${
                                        cert.status === "COMPLETED"
                                            ? "border-green-500/30 text-green-300 bg-green-500/10"
                                            : "border-blue-500/30 text-blue-300 bg-blue-500/10"
                                    }`}>
                                        {cert.status === "COMPLETED" ? "Completed" : "In Progress"}
                                    </div>
                                </div>
                                <div className="text-xs text-muted-foreground mb-2">
                                    <a href={cert.issuerLink} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                                        {cert.issuer}
                                        <ExternalLinkIcon className="w-3 h-3" />
                                    </a>
                                </div>
                                <div className="text-xs text-white/40 font-mono">{cert.date}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}