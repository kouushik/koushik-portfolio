import { Github, ExternalLink, Calendar } from 'lucide-react';

export default function ProjectCard({ project }) {
    const { title, description, tech, timeline, github, live, role } = project;

    return (
        <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl 
                    transition-all duration-300 overflow-hidden">
            <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 
                         dark:group-hover:text-primary-400 transition-colors duration-200">
                        {title}
                    </h3>
                    <div className="flex space-x-3">
                        {github && (
                            <a href={github} target="_blank" rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 
                          dark:hover:text-primary-400 transition-colors duration-200">
                                <Github className="h-5 w-5" />
                            </a>
                        )}
                        {live && (
                            <a href={live} target="_blank" rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 
                          dark:hover:text-primary-400 transition-colors duration-200">
                                <ExternalLink className="h-5 w-5" />
                            </a>
                        )}
                    </div>
                </div>

                {role && (
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {role}
                    </p>
                )}

                <p className="text-gray-600 dark:text-gray-300">
                    {description}
                </p>

                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{timeline}</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                    {tech.map((item) => (
                        <span key={item}
                            className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 
                           text-gray-700 dark:text-gray-300">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}