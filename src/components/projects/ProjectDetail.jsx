import { ArrowLeft, GitHub, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProjectDetail({ project }) {
    const navigate = useNavigate();

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 
                   dark:hover:text-primary-400 mb-8"
            >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Projects
            </button>

            <article className="prose prose-lg dark:prose-invert max-w-none">
                <h1>{project.title}</h1>
                <div className="flex items-center space-x-4 not-prose">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center text-gray-600 dark:text-gray-400 
                        hover:text-primary-600 dark:hover:text-primary-400">
                            <GitHub className="h-5 w-5 mr-2" />
                            View Source
                        </a>
                    )}
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center text-gray-600 dark:text-gray-400 
                        hover:text-primary-600 dark:hover:text-primary-400">
                            <ExternalLink className="h-5 w-5 mr-2" />
                            Live Demo
                        </a>
                    )}
                </div>
                {/* Project content will be rendered here */}
            </article>
        </div>
    );
}