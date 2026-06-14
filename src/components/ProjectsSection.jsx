import { ArrowRight, Code, ExternalLink, FileCodeCorner, GitBranchIcon } from "lucide-react"

const projects = [
    {
        id:1,
        title: "Aurora Home Page",
        description: "Home page of a social media platform using React and CSS.",
        image: "/projects/project1.png",
        tags: ["React", "TypeScript", "Prisma"],
        demoUrl: "#", // keep or delete?
        githubUrl: "https://github.com/LXMA03/Aurora",
    },

    {
        id:2,
        title: "EduTrack Home Page",
        description: "A mobile app that helps students manage their screen time efficiently.",
        image: "/projects/project2.png",
        tags: ["XCode", "Swift"],
        demoUrl: "#", // keep or delete?
        githubUrl: "https://github.com/LXMA03/EduTrack"
    }

    // Add more projects later
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some academic projects I've worked on over the past 2 years. Each project was carefully crafted
                    with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} 
                             className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        
                            {/** Image banner */}
                            <div className="h-48 overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"/> {/** Keep images w/o cropping */}
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                

                                    <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                                    <p className="text-muted foreground text-sm mb-4"> {project.description} </p>

                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                            <a 
                                                href={project.demoUrl} 
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"> 
                                                {/** Demo Link */}
                                                <ExternalLink size={20}/>
                                            </a>

                                            <a
                                                href={project.githubUrl} 
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                <FileCodeCorner size={20}/>
                                            </a>
                                        </div>
                                    </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        href="https://github.com/LXMA03"
                        target="_blank">
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    )
}