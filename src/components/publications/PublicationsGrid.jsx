import PublicationCard from './PublicationCard';
import { BookOpen, Users, Link as LinkIcon } from 'lucide-react';

export default function PublicationsGrid() {
    const publications = [
        {
            id: 1,
            title: "Evaluation and Comparison of Machine Learning Models for Autism Spectrum Disorder Prediction",
            authors: ["Reddy, N. S. V.", "Mannam, K.", "Vikas, G."],
            journal: "IJSER",
            year: 2023,
            volume: "14",
            issue: "7",
            link: "https://yourlink.com",
            citations: 5,
            abstract: "An in-depth analysis of machine learning models for ASD prediction...",
            keywords: ["Machine Learning", "Healthcare", "ASD", "Prediction Models"]
        },
        {
            id: 2,
            title: "Mobile Message Classification Using Natural Language Processing and Machine Learning Algorithms",
            authors: ["Mannam, K.", "Vikas, G.", "Nithya, M.", "Sudha, C."],
            journal: "IJRASET",
            year: 2023,
            volume: "10",
            issue: "6",
            link: "https://yourlink.com",
            citations: 3,
            abstract: "A novel approach to mobile message classification...",
            keywords: ["NLP", "Machine Learning", "Text Classification"]
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Publications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {publications.map((publication) => (
                    <PublicationCard key={publication.id} publication={publication} />
                ))}
            </div>

            <div className="mt-16 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Research Impact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                        <BookOpen className="h-8 w-8 text-primary-600" />
                        <div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">2</p>
                            <p className="text-gray-600 dark:text-gray-400">Publications</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                        <Users className="h-8 w-8 text-primary-600" />
                        <div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">8</p>
                            <p className="text-gray-600 dark:text-gray-400">Citations</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                        <LinkIcon className="h-8 w-8 text-primary-600" />
                        <div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
                            <p className="text-gray-600 dark:text-gray-400">Collaborators</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}