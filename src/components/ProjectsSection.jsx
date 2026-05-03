import { ArrowRight,ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'FCB Porfolio',
        description: 'A beginner-friendly frontend website created during a free coding bootcamp, designed to practice core web development skills interactively.',
        image: "/projects/Project1.png",
        tags: ['HTML', 'CSS', 'Bootstrap', 'GitHub'],
        demoUrl: 'https://kdotlee-dev.github.io/fcbportfolio/',
        gitHubURL: 'https://github.com/kdotlee-dev/fcbportfolio',
    },
    {
        id: 2,
        title: 'HCHO Monitor',
        description: 'This system provides real-time air quality data through a responsive web interface, allowing users to easily track, visualize, and assess formaldehyde levels anytime, anywhere.',
        image: "/projects/Project2.png",
        tags: ['HTML', 'CSS', 'Firebase','ESP32'],
        demoUrl: 'https://formaldehyde-monitoring.web.app/',
        gitHubURL: '#',
    },
    {
        id: 3,
        title: 'LOOMPIA',
        description: 'Learning Out of Messy Piles is an original quiz-themed game, developed by Augustinian Developer Society students for a competitive challenge.',
        image: "/projects/Project3.png",
        tags: ['UnityEngine', 'C#', 'Visual Studio'],
        demoUrl: '#',
        gitHubURL: '#',
    },
]

export const ProjectsSection = () => {
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Featured <span className='text-primary'> Projects</span>
                </h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Projects I built to practice, learn, and apply what I’ve studied
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col' // <-- ADDED: flex flex-col to make card a flex container
                        >
                            <div className='h-48 overflow-hidden'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                            </div>

                            <div className='p-6 flex flex-col flex-1'> {/* <-- ADDED: flex flex-col + flex-1 to push footer down */}
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tags.map((tag) => (
                                        <span
                                            className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'
                                        > {tag}
                                        </span>
                                    ))}
                                </div>


                                <h3 className='text-xl font-semibold mb-1'> {project.title} </h3>
                                <p className='text-muted-foreground text-sm mb-4'
                                >
                                    {project.description}
                                </p>

                                <div className='mt-auto flex justify-between items-center'> {/* <-- ADDED: mt-auto pushes this div to bottom */}
                                    <div className='flex space-x-3'>
                                        <a
                                            href={project.demoUrl}
                                            target='_blank'
                                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.gitHubURL}
                                            target='_blank'
                                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className='mt-12 text-center'>
                    <a 
                        className='cosmic-button w-fit flex items-center gap-2 mx-auto'
                        target='_blank'
                        href='https://github.com/kdotlee-dev'
                    >
                        Check My GitHub for More Projects <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    );
}