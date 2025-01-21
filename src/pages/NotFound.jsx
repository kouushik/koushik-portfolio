import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center">
            <div className="text-center space-y-6">
                <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">Page not found</p>
                <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white
                   hover:bg-primary-700 transition-colors duration-200"
                >
                    <Home className="w-5 h-5 mr-2" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
}