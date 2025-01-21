import { Link } from 'react-router-dom';
// Make sure these icon names match exactly what you're using:
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
    return (
        <div className="relative min-h-[90vh] flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                <div className="animate-float space-y-4">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                        Hi, I&apos;m{' '}
                        <span className="text-primary-600 dark:text-primary-400">Koushik Mannam</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                        A Software Developer and Data Engineer passionate about building innovative solutions
                        that solve real-world problems. Combining AI and robotics to create meaningful products.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4">
                    <Link
                        to="/projects"
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white
                       hover:bg-primary-700 transition-colors duration-200"
                    >
                        View Projects
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>

                    <div className="flex items-center space-x-4">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                        >
                            <Github className="h-6 w-6" />
                        </a>

                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                        >
                            <Linkedin className="h-6 w-6" />
                        </a>

                        <a
                            href="mailto:your.email@example.com"
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                        >
                            <Mail className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
