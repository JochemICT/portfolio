"use client"

import {Code, Database, Globe} from "lucide-react"
import {Card, CardContent} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
    { name: "PHP", category: "Languages", level: "Advanced", logo: "/php.svg" },
    { name: "Laravel", category: "Framework", level: "Advanced", logo: "/docker.svg" },
    { name: "Vue", category: "Frontend", level: "Intermediate", logo: "/vue.svg" },
    { name: "MySQL", category: "Database", level: "Advanced", logo: "/mysql.svg" },
    { name: "JavaScript", category: "Languages", level: "Advanced", logo: "/javascript.svg" },
    { name: "Git", category: "Tools", level: "Advanced", logo: "/git.svg" },
    { name: "Docker", category: "Tools", level: "Beginner", logo: "/docker.svg" },
]

export default function Skills(){
    return (
        <section id="skills" className="py-32 relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="animate-fade-in-up">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-semibold text-black mb-6">Technical Expertise</h2>
                        <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
                        <p className="text-gray-700 text-xl max-w-3xl mx-auto font-normal">
                            Comprehensive technical skills across the full development lifecycle.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.map((skill, index) => {
                            const levelColors = {
                                Beginner: "text-purple-900 border-purple-900",       // very light mint green
                                Intermediate: "text-blue-500 border-blue-300",     // your chosen soft blue
                                Advanced: "text-cyan-500 border-cyan-200",         // lighter cyan/teal
                                Expert: "text-pink-500 border-pink-200",           // very soft pastel pink
                                Master: "text-purple-500 border-purple-200",       // light lavender
                            };

                            return (
                                <Card
                                    key={skill.name}
                                    className="bg-gray-50 border-gray-200 backdrop-blur-sm hover:bg-white transition-all duration-500 hover:scale-105 animate-fade-in-up"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <CardContent className="p-6 text-center">
                                        <img src={skill.logo} alt={`${skill.name} logo`} className="w-25 h-25 text-black mx-auto mb-4" />


                                        <h3 className="text-black font-medium text-lg mb-2">{skill.name}</h3>
                                        <p className="text-gray-600 text-sm mb-3 font-normal">{skill.category}</p>
                                        <Badge
                                            variant="outline"
                                            className={`${levelColors[skill.level as keyof typeof levelColors]} bg-transparent font-normal`}
                                        >
                                            {skill.level}
                                        </Badge>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}