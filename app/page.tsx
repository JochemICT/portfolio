import type React from "react";
import Hero from "./hero";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "./footer";


export default function Page() {
return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
    </div>
)
}