"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {Code, MapPin} from "lucide-react"

const careerItems = [
    {
        id: 1,
        title: "Developer",
        company: "Koninklijke Van der Most",
        description: "Working as a developer on various projects, collaborating with teams, and continuously growing my skills.",
        technologies: ["Laravel", "Vue", "Git", "Docker"],
        from: "Nov 2024",
        till: "Present"
    },
    {
        id: 2,
        title: "Laravel Developer",
        company: "Digi Process B.V.",
        description: "Built and maintained a Laravel-based application, contributed to backend development, and improved system performance.",
        technologies: ["Laravel", "Git"],
        from: "Jul 2023",
        till: "Nov 2024"
    }
]

export default function About(){
    return (
        <section id="about" className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="animate-fade-in-up">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-semibold text-black mb-6">About</h2>
                        <div className="w-24 h-0.5 bg-black mx-auto"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h3 className="text-3xl font-medium text-black mb-8">Info about me</h3>
                            <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-normal">
                                <p>
                                    I'm Jochem Meurer, 21 years old and based in The Netherlands. After completing my MBO 4 Application
                                    Developer program at Deltion College, I started the HBO-ICT program at Hogeschool Windesheim, driven
                                    by my passion for continuous learning and growth in technology.
                                </p>
                                <p>
                                    Currently working as a Developer at Koninklijke Van der Most, I previously gained valuable
                                    experience as a Laravel Developer at Digi Process B.V. I'm eager to learn, entrepreneurial, and
                                    always open to new challenges. I take initiative, think collaboratively, and share ideas when I see
                                    opportunities for improvement.
                                </p>
                                <p>
                                    I function well both independently and within a team. I work systematically, am solution-oriented,
                                    and enjoy contributing to brainstorming sessions. Whether it's asking for help or supporting others
                                    when needed, I believe in the power of collaboration and continuous learning.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-12">
                            {careerItems.map((careerItem) => {
                                return (
                                    <div key={careerItem.id} className="grid grid-cols-[auto_1px_1fr] gap-6 items-start">
                                        <span className="text-sm text-gray-500 w-24 text-right pt-1">{careerItem.till} <br/>-<br/> {careerItem.from}</span>
                                        <div className="w-px bg-gray-300 h-full"></div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-black">{careerItem.title}</h4>
                                            <span className="text-gray-500 text-sm">{careerItem.company}</span>
                                            <p className="mt-2 text-gray-700 text-base">
                                                {careerItem.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}