import { ArrowUpRight, BookOpen } from 'lucide-react';

export default function PublicationCard({ publication }) {
    const { title, authors, journal, year, volume, issue, link, citations, keywords } = publication;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="p-6">
                <div className="flex items-start justify-between">
                    <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    {citations > 0 && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm 
                             bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                            {citations} citations
                        </span>
                    )}
                </div>

                <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                    {title}
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {authors.join(', ')}
                </p>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {journal} &bull; Vol. {volume}, Issue {issue} &bull; {year}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
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

                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center text-primary-600 dark:text-primary-400 
                       hover:text-primary-700 dark:hover:text-primary-300"
                    >
                        View Publication
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                )}
            </div>
        </div>
    );
}
