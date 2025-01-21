import Navbar from './Navbar';
import Footer from './Footer';
import ThemeSwitcher from './ThemeSwitcher';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <Navbar />
            <ThemeSwitcher />
            <main className="pt-16 pb-8">
                {children}
            </main>
            <Footer />
        </div>
    );
}