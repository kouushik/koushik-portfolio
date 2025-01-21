export default function TechStack() {
    const technologies = {
        "Languages": ["Python", "C++", "Java", "JavaScript"],
        "Web Development": ["React.js", "Node.js", "HTML5", "CSS3"],
        "Data Engineering": ["MySQL", "PostgreSQL", "MongoDB", "Apache Spark"],
        "Cloud & DevOps": ["AWS", "Git", "Docker", "Linux"],
        "AI & ML": ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision"]
    };

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                    Tech Stack
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(technologies).map(([category, techs]) => (
                        <div key={category} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {techs.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700
                               text-gray-700 dark:text-gray-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}