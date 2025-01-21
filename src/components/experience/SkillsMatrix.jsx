export default function SkillsMatrix() {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Python", level: 90 },
                { name: "Java", level: 85 },
                { name: "C++", level: 80 },
                { name: "JavaScript", level: 85 }
            ]
        },
        {
            title: "Data Engineering",
            skills: [
                { name: "SQL", level: 90 },
                { name: "MongoDB", level: 85 },
                { name: "Apache Spark", level: 80 },
                { name: "Data Processing", level: 85 }
            ]
        },
        {
            title: "Web Development",
            skills: [
                { name: "React.js", level: 85 },
                { name: "Node.js", level: 80 },
                { name: "HTML/CSS", level: 85 },
                { name: "RESTful APIs", level: 85 }
            ]
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category) => (
                    <div
                        key={category.title}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                    >
                        <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-6">
                            {category.title}
                        </h3>
                        <div className="space-y-4">
                            {category.skills.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                                        <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                        <div
                                            className="bg-primary-600 dark:bg-primary-400 h-2.5 rounded-full transition-all duration-500"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}