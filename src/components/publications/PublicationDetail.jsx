import { ArrowLeft, BookOpen, Users, Calendar, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PublicationDetail({ publication }) {
    const navigate = useNavigate();
    const { title, authors, journal, year, abstract, keywords, citations } = publication;

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 
                   dark:hover:text-primary-400 mb-8"
            >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Publications
            </button>

            <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 mb-4">
                    <BookOpen className="h-6 w-6" />
                    <span className="text-sm font-medium">Research Publication</span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h1>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                    <div className="flex items-center">
                        <Users className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                        <span className="text-gray-600 dark:text-gray-300">{authors.join(", ")}</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                        <span className="text-gray-600 dark:text-gray-300">{year}</span>
                    </div>
                    {citations > 0 && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm 
                           bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                            {citations} citations
                        </span>
                    )}
                </div>

                <div className="prose dark:prose-invert max-w-none">
                    <h2>Abstract</h2>
                    <p>{abstract}</p>
                </div>

                <div className="mt-8">
                    <div className="flex items-center mb-4">
                        <Tag className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                        <span className="text-gray-900 dark:text-white font-medium">Keywords</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {keywords.map((keyword) => (
                            <span
                                key={keyword}
                                className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 
                         text-gray-700 dark:text-gray-300"
                            >
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
}