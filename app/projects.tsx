"use client"

import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {ExternalLink, Github} from "lucide-react";
import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Coming Soon",
        description: "Comming soon",
        image: "/placeholder.svg?height=300&width=400",
        technologies: ["Comming soon"],
        category: "fullstack",
        liveUrl: "#",
        githubUrl: "#",
        isPlaceholder: true,
    },
    {
        id: 2,
        title: "Coming Soon",
        description: "Comming soon",
        image: "/placeholder.svg?height=300&width=400",
        technologies: ["Comming soon"],
        category: "fullstack",
        liveUrl: "#",
        githubUrl: "#",
        isPlaceholder: true,
    },
]


export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("all")

    const filteredProjects =
        activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

    return (
        <section id="projects" className="py-32 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="animate-fade-in-up">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-semibold text-black mb-6">Selected Work</h2>
                        <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
                        <p className="text-gray-700 text-xl max-w-3xl mx-auto font-normal">
                            A showcase of selected projects, completed and currently in progress, reflecting my skills and creativity.
                        </p>
                    </div>

                    {/* Project Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {["all"].map((filter) => (
                            <Button
                                key={filter}
                                variant={activeFilter === filter ? "default" : "outline"}
                                onClick={() => setActiveFilter(filter)}
                                className={`rounded-full px-8 py-2 transition-all duration-300 font-medium ${
                                    activeFilter === filter
                                        ? "bg-black hover:bg-gray-800 text-white"
                                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                                }`}
                            >
                                {filter.charAt(0).toUpperCase() + filter.slice(1)}
                            </Button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {filteredProjects.map((project, index) => (
                            <Card
                                key={project.id}
                                className={`group border-gray-200 backdrop-blur-sm transition-all duration-500 animate-fade-in-up pt-0 ${
                                    project.isPlaceholder
                                        ? "bg-gray-100 hover:bg-gray-50"
                                        : "bg-gray-50 hover:bg-white hover:scale-[1.02] hover:shadow-2xl"
                                }`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <div
                                        className={`w-full h-64 ${
                                            project.isPlaceholder ? "bg-gray-200 animate-pulse flex items-center justify-center" : ""
                                        }`}
                                    >
                                        {project.isPlaceholder ? (
                                            <div className="text-gray-400 text-center">
                                                <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4 animate-pulse"></div>
                                                <p className="text-sm font-medium">Project Preview</p>
                                                <p className="text-xs">Coming Soon</p>
                                            </div>
                                        ) : (
                                            <img
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        )}
                                    </div>
                                    {!project.isPlaceholder && (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                                <Button size="sm" className="bg-black hover:bg-gray-800 rounded-full" asChild>
                                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                </Button>
                                                <Button size="sm" className="bg-gray-600 hover:bg-gray-700 rounded-full" asChild>
                                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                        <Github className="w-4 h-4" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <CardHeader className="pb-4">
                                    <CardTitle
                                        className={`text-2xl transition-colors font-medium ${
                                            project.isPlaceholder ? "text-gray-400" : "text-black group-hover:text-gray-700"
                                        }`}
                                    >
                                        {project.isPlaceholder ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
                                                {project.title}
                                            </div>
                                        ) : (
                                            project.title
                                        )}
                                    </CardTitle>
                                    <CardDescription
                                        className={`text-base leading-relaxed font-normal ${
                                            project.isPlaceholder ? "text-gray-400" : "text-gray-700"
                                        }`}
                                    >
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="outline"
                                                className={`transition-colors font-normal ${
                                                    project.isPlaceholder
                                                        ? "border-gray-300 text-gray-400 bg-gray-50"
                                                        : "border-gray-300 text-gray-700 hover:border-black hover:text-black"
                                                }`}
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}