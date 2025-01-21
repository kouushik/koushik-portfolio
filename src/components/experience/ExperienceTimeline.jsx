import { Briefcase, GraduationCap } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

export default function ExperienceTimeline() {
    const experiences = [
        {
            id: 1,
            title: "Software Research Assistant",
            company: "Neuroscience Research Lab",
            location: "Cleveland, OH",
            type: "work",
            date: "Jan 2024 - Present",
            description: "Engineered data processing pipeline using Python and pandas to automate analysis of neuroscience imaging data across multiple experimental groups.",
            achievements: [
                "Built quality assurance system reducing manual processing time by 80%",
                "Created interactive visualization tool using Plotly and Streamlit",
                "Automated data validation for 100+ Excel spreadsheets"
            ],
            tech: ["Python", "Pandas", "Plotly", "Streamlit"]
        },
        {
            id: 2,
            title: "Web Development Intern",
            company: "Cerebro Team",
            location: "Remote",
            type: "work",
            date: "Jan 2023 - June 2023",
            description: "Developed key features for an online education platform using React.js and MySQL.",
            achievements: [
                "Implemented RESTful APIs with 95% test coverage",
                "Reduced page load time by 40%",
                "Served 500+ active users"
            ],
            tech: ["React.js", "Node.js", "MySQL", "REST APIs"]
        },
        {
            id: 3,
            title: "MS in Computer Science",
            company: "Case Western Reserve University",
            location: "Cleveland, OH",
            type: "education",
            date: "Aug 2023 - Present",
            description: "Focus on Software Development, Data Engineering, and AI/ML",
            achievements: [
                "GPA: 3.5",
                "Teaching Assistant for Python Programming",
                "Research in Data Processing and Visualization"
            ]
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Experience
            </h2>
            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

                <div className="space-y-12">
                    {experiences.map((experience) => (
                        <ExperienceCard
                            key={experience.id}
                            experience={experience}
                            icon={experience.type === 'work' ? Briefcase : GraduationCap}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}