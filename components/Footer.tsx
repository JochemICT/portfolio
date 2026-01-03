import {Linkedin, Mail} from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <div className="text-lg font-bold font-heading tracking-tighter mb-2">
                        Jochem Meurer
                    </div>
                    <p className="text-xs text-muted-foreground font-mono">
                        &copy; {new Date().getFullYear()} {"//"} ALL RIGHTS RESERVED
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="https://www.linkedin.com/in/jochem-meurer/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                        <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="mailto:jochem@meurer.email" className="text-muted-foreground hover:text-white transition-colors">
                        <Mail className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </footer>
    )
}