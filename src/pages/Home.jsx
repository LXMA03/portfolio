import { NavBar } from "../components/NavBar"
import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"

export const Home = () => {
    return ( 
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">  {/*Apply background color, text, etc*/}
    
        {/** Theme toggle - light or dark (import here)*/}
        <ThemeToggle />

        {/** Backgroung Effects */}
        <StarBackground />

        {/** NavBar */}
        <NavBar />

        {/** Main content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />

        </main>

        {/** Footer */}
    
    
    </div>
    )
}