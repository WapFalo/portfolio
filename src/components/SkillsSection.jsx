import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // Frontend Skills
    {name: "JavaScript", category: "frontend"},
    {name: "TypeScript", category: "frontend"},
    {name: "HTML/CSS", category: "frontend"},
    {name: "Tailwind CSS", category: "frontend"},
    {name: "React", category: "frontend"},
    {name: "VueJS", category: "frontend"},
    {name: "Angular", category: "frontend"},

    //Backend Skills
    {name: "Node.js", category: "backend"},
    {name: "Express", category: "backend"},
    {name: "Python", category: "backend"},
    {name: "Django", category: "backend"},
    {name: "PHP", category: "backend"},
    {name: "Symfony", category: "backend"},
    {name: "Java", category: "backend"},
    {name: "Spring Boot", category: "backend"},
    {name: "Databases (MySQL, PostgreSQL, MongoDB)", category: "backend"},
    {name: "RESTful APIs", category: "backend"},

    // Algorithms and Data Structures
    {name: "Sorting Algorithms", category: "algorithms"},
    {name: "C", category: "algorithms"},
    {name: "C#", category: "algorithms"},

    // DevOps and Tools
    {name: "Git", category: "devops"},
    {name: "Docker", category: "devops"},
    {name: "Excel", category: "devops"},
    {name: "Figma", category: "devops"},
    {name: "Adobe Suite", category: "devops"},

    // Languages
    {name: "English", category: "languages"},
    {name: "French", category: "languages"},
    {name: "Portuguese", category: "languages"},
    {name: "Italian", category: "languages"},
]

const categories = ["all", "frontend", "backend", "algorithms", "devops", "languages"];

export const SkillSection = () =>  {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                        )}
                    >
                        {category}
                </button>))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-center mb-4">
                            <h3 className="font-semibold text-lg">
                                {skill.name}
                            </h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
}