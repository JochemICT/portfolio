"use client"

import {motion} from "framer-motion";

type props = {
    number: string,
    title: string
}
export default function CommingSoonSection({number, title}: props){
    return (
        <section id="skills" className="container mx-auto px-4 py-24 border-t border-white/5 max-w-5xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase tracking-tight mb-2">
                    {number} // {title}
                </h2>
                <div className="h-px w-24 bg-white"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-heading font-bold tracking-tight">
                <h3>
                    Comming soon...
                </h3>
            </div>
        </section>
    )
}