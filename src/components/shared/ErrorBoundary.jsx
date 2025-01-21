import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center px-4">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Something went wrong
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            Please try refreshing the page or going back to the homepage
                        </p>
                        <Link
                            to="/"
                            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 
                       transition-colors duration-200"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;