import { Linkedin, Github, Mail } from "lucide-react";
import React from "react";

const socials = [
    {
        id: 1,
        link: "https://linkedin.com/in/jochem-meurer",
        icon: Linkedin,
    },
    {
        id: 2,
        link: "https://github.com/JochemICT",
        icon: Github,
    },
    {
        id: 3,
        link: "mailto:jochem@meurer.email",
        icon: Mail,
    }
]

export default function Footer(){
    return (
        <footer className="py-12 border-t border-gray-200 relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-600 font-normal">© 2025 Jochem Meurer. Crafted with passion.</p>
                    </div>
                    <div className="flex gap-6">
                        {socials.map((social) => {
                            const Icon = social.icon
                            return (
                                <a key={social.id} href={social.link} className="text-gray-600 hover:text-black transition-colors">
                                    <Icon className="w-6 h-6" />
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}