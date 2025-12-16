import { ArrowRight, Github } from "lucide-react";

const projects = [
    {
    "id": 1,
    "title": "Site Vitrine Studio",
    "description": "Portfolio website for a design studio with CSS animations.",
    "type": "website",
    "image": "https://picsum.photos/id/1015/800/500",
    "githubUrl" : "#"
  },
  {
    "id": 2,
    "title": "Todo App",
    "description": "Vanilla JS web app to take notes and manage a todo-list.",
    "type": "webapp",
    "image": "https://picsum.photos/id/1025/800/500",
    "githubUrl" : "#"
  },
  {
    "id": 3,
    "title": "School Project - Robotic",
    "description": "Quick website for a robotics project.",
    "type": "school",
    "image": "https://picsum.photos/id/1035/800/500",
    "githubUrl" : "#"
  },
  {
    "id": 4,
    "title": "E-commerce demo",
    "description": "Prototype for an online schop with filters and mocks.",
    "type": "webapp",
    "image": "https://picsum.photos/id/1050/800/500",
    "githubUrl" : "#"
  },
  {
    "id": 5,
    "title": "Portfolio Photographe",
    "description": "Portfolio for a photograph artist in Paris.",
    "type": "site vitrine",
    "image": "https://picsum.photos/id/1060/800/500",
    "githubUrl" : "#"
  }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 mx-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted
                    with attention to detail, performance and user experience in mind.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((projects, key) => (
                        <div key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={projects.image}
                                alt={projects.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-1">
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary">{projects.type}</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-1">{projects.title}</h3>
                            <p className="text-muted-foreground text-sm mb-5">
                                {projects.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a
                                    href={projects.githubUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        {" "}
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div> 
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="#" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
};