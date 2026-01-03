import {Button} from "@/components/ui/button";

export default function Nav(){
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-white/10 px-6 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold tracking-tighter font-heading">
                    Jochem Meurer
                </div>
                <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-muted-foreground">
                    <a
                        href="#about"
                        className="hover:text-white transition-colors hover:underline decoration-1 underline-offset-4"
                    >
                        About
                    </a>
                    <a
                        href="#experience"
                        className="hover:text-white transition-colors hover:underline decoration-1 underline-offset-4"
                    >
                        Experience
                    </a>
                    <a
                        href="#education"
                        className="hover:text-white transition-colors hover:underline decoration-1 underline-offset-4"
                    >
                        Education
                    </a>
                    <a
                        href="#certificates"
                        className="hover:text-white transition-colors hover:underline decoration-1 underline-offset-4"
                    >
                        Certificates
                    </a>
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    className="rounded-none border-white/20 hover:bg-white hover:text-black transition-all text-xs uppercase tracking-widest"
                    asChild
                >
                    <a href="mailto:jochem@meurer.email">Contact_Me</a>
                </Button>
            </div>
        </nav>
    )
}