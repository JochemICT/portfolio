"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export default function Contact() {
    const socials = [
        {
            title: "LinkedIn",
            icon: Linkedin,
            url: "https://linkedin.com/in/jochem-meurer",
        },
        {
            title: "Github",
            icon: Github,
            url: "https://github.com/JochemICT",
        },
    ]

    return (
        <section id="contact" className="py-32 relative z-10">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-fade-in-up">
                    <h2 className="text-5xl font-semibold text-black mb-6">Let's Connect</h2>
                    <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
                    <p className="text-gray-700 text-xl mb-12 font-normal max-w-2xl mx-auto">
                        Ready to discuss your next project or explore collaboration opportunities?
                    </p>

                    <div className="space-y-12 text-left">
                        <div>
                            <h3 className="text-3xl font-medium text-black mb-6">Get In Touch</h3>
                            <p className="text-gray-700 text-lg leading-relaxed font-normal mb-8">
                                I'm always interested in discussing innovative projects, technical challenges, and opportunities to create impactful solutions.
                                With a background in web development and current experience as a Laravel developer,
                                I bring both practical expertise and a drive for continuous improvement.
                                I'm always eager to contribute and collaborate.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-black" />
                                    </div>
                                    <div>
                                        <p className="text-black font-medium">Email</p>
                                        <p className="text-gray-700 font-normal">jochem@meurer.email</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-black" />
                                    </div>
                                    <div>
                                        <p className="text-black font-medium">Location</p>
                                        <p className="text-gray-700 font-normal">Netherlands</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            {socials.map((social) => {
                                const Icon = social.icon
                                return (
                                    <Button
                                        key={social.title}
                                        variant="outline"
                                        size="lg"
                                        className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full font-medium"
                                        asChild
                                    >
                                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                                            <Icon className="w-5 h-5 mr-2" />
                                            {social.title}
                                        </a>
                                    </Button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
