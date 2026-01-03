import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Github, ExternalLink } from "lucide-react";

interface ProjectLink {
    label: string;
    github?: string;
    website?: string;
}

interface TechStackCardProps {
    title: string;
    description: string;
    projects: ProjectLink[];
    skills: string[];
}

export default function TechStackCard({
                                          title,
                                          description,
                                          projects,
                                          skills,
                                      }: TechStackCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-white/10 hover:border-white/20 transition-colors"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-6 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
            >
                <div className="flex-1">
                    <h3 className="text-xl font-bold font-heading uppercase tracking-tight mb-2">
                        {title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-mono">
                        {description}
                    </p>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 flex-shrink-0"
                >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-6 space-y-6 bg-white/2">
                            {/* Projects */}
                            <div>
                                <h4 className="text-sm font-bold font-heading uppercase tracking-widest mb-3 text-white/70">
                                    Projects & Experience
                                </h4>
                                <ul className="space-y-3">
                                    {projects.map((project, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="text-sm text-muted-foreground font-mono flex items-center justify-between group"
                                        >
                      <span className="flex items-center gap-3">
                        <span className="text-white/40">→</span>
                        <span>{project.label}</span>
                      </span>
                                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white/40 hover:text-white transition-colors"
                                                        title="View on GitHub"
                                                    >
                                                        <Github className="w-4 h-4" />
                                                    </a>
                                                )}
                                                {project.website && (
                                                    <a
                                                        href={project.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white/40 hover:text-white transition-colors"
                                                        title="View Live Project"
                                                    >
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                )}
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Skills */}
                            <div>
                                <h4 className="text-sm font-bold font-heading uppercase tracking-widest mb-3 text-white/70">
                                    Key Skills
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="px-3 py-1 border border-white/20 rounded text-xs font-mono text-muted-foreground hover:border-white/40 hover:text-white transition-colors"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
