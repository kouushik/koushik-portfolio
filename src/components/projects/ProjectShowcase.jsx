import ProjectCard from './ProjectCard';

export default function ProjectShowcase() {
    const projects = [
        {
            id: 1,
            title: "Intelligent Product Recommendation System",
            description: "Built a recommendation engine using Python and collaborative filtering, integrated with Node.js backend to serve personalized product suggestions.",
            tech: ["Python", "Node.js", "React.js", "AWS"],
            role: "Team Lead",
            timeline: "Sept 2023 - Dec 2023",
            github: "https://github.com/yourusername/project1",
            live: "https://project1.com",
            image: "/project1.png"
        },
        {
            id: 2,
            title: "Neuroscience Research Pipeline",
            description: "Engineered data processing pipeline using Python and pandas to automate analysis of neuroscience imaging data across multiple experimental groups.",
            tech: ["Python", "Pandas", "Plotly", "Streamlit"],
            role: "Software Research Assistant",
            timeline: "Jan 2024 - Present",
            github: "https://github.com/yourusername/project2"
        },
        {
            id: 3,
            title: "Inventory Management System",
            description: "Designed inventory tracking system using Python and MongoDB with Redis caching to improve read performance.",
            tech: ["Python", "MongoDB", "Redis", "React.js"],
            timeline: "Jan 2023 - June 2023",
            github: "https://github.com/yourusername/project3"
        }
    ];

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}