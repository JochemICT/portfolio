"use client"

import { motion } from "framer-motion"
import PositionCard from "@/components/PositionCard"

const positions = [
    {
        id: 1,
        company: "Koninklijke Van der Most",
        title: "Software Developer",
        date: "Nov 2024 - Present",
        description: "Driving the development of internal and external software ecosystems. Responsible for full-cycle development, from architectural design to deployment and maintenance. Implementing scalable solutions to optimize business processes.",
        skills: ["PHP", "MySQL", "Linux", "Laravel", "Vue"],
        // tags: ["Development", "Full Stack"],
        tags: [],
        current: true,
    },
    {
        id: 2,
        company: "Digi Process B.V.",
        title: "Laravel Developer",
        date: "Jul 2023 - Nov 2024",
        description: "Developing and extending functionalities within a multi-tenant ERP system used by multiple clients. Contributed to the full development lifecycle, from design to implementation and maintenance. Built new modules such as an internal wiki to improve knowledge sharing and streamline business processes.",
        skills: ["PHP", "MySQL", "Laravel"],
        tags: [],
        current: false
    }
]

export default function ExperienceSection(){
    return (
        <section id="experience" className="container mx-auto px-4 py-24 border-t border-white/5 max-w-5xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase tracking-tight mb-2">
                    02 // Experience
                </h2>
                <div className="h-px w-24 bg-white"></div>
            </motion.div>

            { positions.map((position) => (
                <div key={position.id} className="mb-4">
                    <PositionCard position={position} />
                </div>
            ))}
        </section>
    )
}