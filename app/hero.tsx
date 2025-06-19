"use client"

import type React from "react";
import { useState, useEffect, useRef } from "react"
import {ChevronDown} from "lucide-react";
import {Button} from "@/components/ui/button";

const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
}


export default function Hero() {
    const heroRef = useRef<HTMLElement>(null)

    return (
        <section
            ref={heroRef}
            id="home"
            className="min-h-screen flex items-center justify-center relative z-10 overflow-hidden"
        >

            <div className="max-w-5xl mx-auto text-center px-4 animate-fade-in relative z-10">
                <div className="mb-12">
                    <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-black p-1 shadow-2xl relative">
                        <img
                            src="pf.png"
                            alt="Jochem's Profile"
                            className="w-full h-full rounded-full object-cover bg-gray-100"
                        />
                    </div>
                    <h1 className="text-6xl md:text-8xl font-medium text-black mb-6 tracking-tight relative">
                        Jochem
                    </h1>
                    <div className="space-y-4 mb-12">
                        <p className="text-2xl md:text-3xl text-gray-700 font-medium">Fullstack Developer</p>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">
                            Passionate developer from The Netherlands. Specialized in PHP and Laravel development
                            with a focus on continuous learning and innovative solutions.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                    <Button
                        onClick={() => scrollToSection("projects")}
                        size="lg"
                        className="bg-black hover:bg-gray-800 text-white px-12 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                    >
                        <span className="relative z-10">View Portfolio</span>
                        <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                    <Button
                        onClick={() => scrollToSection("contact")}
                        variant="outline"
                        size="lg"
                        className="border-2 border-black text-black hover:bg-black hover:text-white px-12 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                    >
                        <span className="relative z-10">Get In Touch</span>
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                </div>

                <div className="animate-bounce">
                    <ChevronDown
                        className="w-8 h-8 text-gray-400 mx-auto cursor-pointer hover:text-black transition-colors"
                        onClick={() => scrollToSection("about")}
                    />
                </div>
            </div>
        </section>
    )
}