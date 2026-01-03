"use client"

import {motion} from "framer-motion";
import {Badge} from "@/components/ui/badge";

type Position = {
    id: number,
    company: string,
    title: string,
    date: string,
    description: string,
    skills: string[],
    tags: string[],
    current: boolean,
}

type PositionCardProps = {
    position: Position,
}

export default function PositionCard({ position }: PositionCardProps) {
    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <div className="group relative border border-white/10 bg-black hover:border-white/40 transition-colors duration-500">
                    <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                            <div>
                                <h3 className="text-2xl font-bold font-heading">{ position.company }</h3>
                                <div className="text-sm text-muted-foreground mt-1 font-mono">&gt; { position.title}</div>
                            </div>

                            {position.current &&
                                <Badge variant="outline" className="rounded-none border-white/20 text-xs uppercase tracking-widest py-2">
                                    Current_Position
                                </Badge>
                            }
                        </div>
                        <p className="text-muted-foreground max-w-3xl leading-relaxed mb-6">
                            {position.description}
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {position.skills.map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="secondary"
                                    className="text-[10px] uppercase tracking-wider"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {position.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 text-muted-foreground border border-white/5"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}